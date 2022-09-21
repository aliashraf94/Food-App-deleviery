import Routes from './Routes';
import React, {useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Dashboard from '../Screens/Dashboard/Dashboard';
import Splash from '../Screens/AuthModules/Splash/Splash';
import RestaurantDetails from '../Screens/Dashboard/RestaurantDetails';
import About from '../Components/RestaurantDetailsComp/About';
import OrderCompleted from '../Screens/Dashboard/OrderCompleted';

const Stack = createNativeStackNavigator();
function AppStackNavigations() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={Routes.DASHBOARD} component={Dashboard} />
      <Stack.Screen
        name={Routes.RESTAURANTDETAILS}
        component={RestaurantDetails}
      />
      <Stack.Screen name={Routes.ABOUT} component={About} />
      <Stack.Screen name={Routes.ORDER_COMPELETED} component={OrderCompleted} />
      <Stack.Screen name={Routes.SPLASH} component={Splash} />
    </Stack.Navigator>
  );
}
export default AppStackNavigations;
