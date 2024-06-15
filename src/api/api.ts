import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const api = axios.create({
  baseURL: 'http://192.168.56.1:5000',
});

api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

api.interceptors.response.use(
  response => {
    return response;
  },
  async error => {
    const originalRequest = error.config;
    if (
      error.response &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      const res = await api.post(
        '/auth/refresh-token',
        {},
        {
          headers: {
            Authorization: `Bearer ${refreshToken}`,
          },
        },
      );
      if (res.status === 200) {
        await AsyncStorage.setItem('accessToken', res.data.accessToken);
        axios.defaults.headers.common['Authorization'] =
          'Bearer ' + res.data.accessToken;
        return api(originalRequest);
      }
    }
    return Promise.reject(error);
  },
);

export const registerUser = async (username: string, password: string) => {
  try {
    const response = await api.post('/auth/register', {username, password});
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error('Error registering user:', error.response.data);
      throw new Error(error.response.data.message || 'Error registering user');
    } else {
      console.error('Error registering user:', error.message);
      throw new Error('Network error');
    }
  }
};

export default api;
