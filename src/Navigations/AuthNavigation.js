import React from 'react';
import Routes from './Routes';
import Splash from '../Screens/AuthModules/Splash/Splash';
import Login from '../Screens/AuthModules/Login/Login';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUp from '../Screens/AuthModules/SignUp/SignUp';
import Dashboard from '../Screens/Dashboard/Dashboard';

const Stack = createNativeStackNavigator();
function AuthNavigation() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.SPLASH} component={Splash} />
      <Stack.Screen name={Routes.LOGIN} component={Login} />
      <Stack.Screen name={Routes.SIGNUP} component={SignUp} />
      <Stack.Screen name={Routes.DASHBOARD} component={Dashboard} />
    </Stack.Navigator>
  );
}
export default AuthNavigation;
