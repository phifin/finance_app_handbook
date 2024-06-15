// src/navigation/AppNavigator.tsx

import React from 'react';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector, useDispatch} from 'react-redux';
import {RootState} from '../redux/store';
import {setLoggedIn} from '../redux/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import LoginNavigator from './AuthNavigation';
import TabNavigator from './tabNavigator';

const Stack = createStackNavigator();

const AppNavigator = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const token = await AsyncStorage.getItem('accessToken');
      if (token) {
        dispatch(setLoggedIn({accessToken: token, refreshToken: null}));
      }
    };

    checkLoginStatus();
  }, [dispatch]);
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        {isLoggedIn ? (
          <Stack.Screen name="Main" component={TabNavigator} />
        ) : (
          <Stack.Screen name="Auth" component={LoginNavigator} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
