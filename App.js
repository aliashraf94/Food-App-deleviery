import React, {useEffect} from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/Utills/RootStack';
import {toastConfig} from './src/Utills/toastMessageConfig copy';
import Toast from 'react-native-toast-message';
import NetInfo from '@react-native-community/netinfo';

const App = () => {
  // no internet
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      if (!state.isConnected && !state.isInternetReachable)
        Toast.show({
          type: 'error',
          text1: 'No internet connection',
          text2: 'Please check your internet connection',
          position: 'top',
        });

      console.log('Connection type', state.type);
      console.log('Is connected?', state.isConnected);
      console.log('Is connected?', state.isInternetReachable);
    });
    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      <RootStack />
      <Toast config={toastConfig} />
    </NavigationContainer>
  );
};

export default App;
