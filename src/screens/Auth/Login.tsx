import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import {useDispatch} from 'react-redux';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import {appLogo} from '../../assets/imageSrc';
import {StackNavigationProp} from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from '../../api/api';
import {setLoggedIn} from '../../redux/authSlice';
import {RootStackParamList} from '../../type/type';
type LoginProps = {
  navigation: StackNavigationProp<RootStackParamList, 'Auth'>;
};

const Login: React.FC<LoginProps> = ({navigation}) => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const response = await api.post('/auth/login', {username, password});
      await AsyncStorage.setItem('accessToken', response.data.accessToken);
      await AsyncStorage.setItem('refreshToken', response.data.refreshToken);
      // Tiếp tục xử lý sau khi lưu token
      dispatch(
        setLoggedIn({
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
        }),
      );
      navigation.navigate('Main');
      Alert.alert('Login successful');
    } catch (error) {
      if (error.response) {
        Alert.alert('Login failed', error.response.data);
      } else {
        Alert.alert('Login failed', 'Network error. Please try again later.');
      }
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={appLogo} style={styles.logo} alt="app-logo" />
        <Text style={styles.logoText}>Finhub</Text>
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.signInText}>Sign in</Text>
        <View style={styles.inputWrapper}>
          <View style={styles.inputContainer}>
            <FontAwesome5 name="user" size={20} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Username"
              onChangeText={setUsername}
              value={username}
            />
          </View>
          <View style={styles.inputContainer}>
            <FontAwesome5 name="lock" size={20} style={styles.icon} />
            <TextInput
              style={styles.input}
              placeholder="Password"
              secureTextEntry
              onChangeText={newPassword => setPassword(newPassword)}
              value={password}
            />
          </View>
        </View>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              display: 'flex',
              marginTop: 7,
              width: 300,
              height: 50,
              backgroundColor: '#8E4CE4',
              borderRadius: 12,
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={handleLogin}>
            <Text style={{color: 'white', fontSize: 15}}>Sign in</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          marginTop: 100,
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: 18}}>Don't have your account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Register');
          }}>
          <Text style={{fontSize: 18, color: 'blue'}}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  logoContainer: {
    marginTop: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
  },
  logoText: {
    marginTop: -20,
    color: 'violet',
    fontWeight: 'bold',
    fontSize: 50,
  },
  formContainer: {
    marginTop: 15,
    marginLeft: 30,
    marginRight: 30,
  },
  signInText: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30,
  },
  inputWrapper: {
    marginTop: 15,
  },
  inputContainer: {
    height: 70,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 0.7,
    borderColor: 'black',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 22,
  },
  icon: {
    marginRight: 10,
    color: 'gray',
  },
  input: {
    flex: 1,
    height: 40,
  },
});

export default Login;
