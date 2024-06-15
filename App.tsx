import * as React from 'react';
import {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import TabNavigator from './src/navigation/tabNavigator';
import LoginNavigator from './src/navigation/AuthNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector, Provider} from 'react-redux';
import store, {RootState} from './src/redux/store';
import {setLoggedIn} from './src/redux/authSlice';
import AppNavigator from './src/navigation/AppNavigator';

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
