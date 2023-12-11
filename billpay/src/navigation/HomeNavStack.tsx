import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import BillPayment from '../screens/BillPayment/BillPaymentShortcut';

const Stack = createStackNavigator();

function HomeNavigationContainer() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="BillPaymentShortcut" component={BillPayment} />
    </Stack.Navigator>
  );
}

export default HomeNavigationContainer;
