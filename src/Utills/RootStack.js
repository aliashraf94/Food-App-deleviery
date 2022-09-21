import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AuthNavigation from '../Navigations/AuthNavigation';
import AppStackNavigations from '../Navigations/AppStackNavigations';
import auth from '@react-native-firebase/auth';
import {useIsFocused} from '@react-navigation/native';
import {Provider as ReduxProvider} from 'react-redux';
import configureStore from '../redux/store';

const store = configureStore();

const Stack = createNativeStackNavigator();

function RootStack() {
  const [getUser, setGetUser] = useState(false);
  const isFocused = useIsFocused();

  console.log('---getUser---getUser--->>>', getUser);
  getUserInformation = async () => {
    await auth().onAuthStateChanged(user => {
      setGetUser(user);
      console.log('====user===>', user);
    });
  };
  useEffect(() => {
    getUserInformation(), [isFocused];
  });

  return (
    <>
      <ReduxProvider store={store}>
        {getUser ? <AppStackNavigations /> : <AuthNavigation />}
      </ReduxProvider>
    </>
  );
}
export default RootStack;
