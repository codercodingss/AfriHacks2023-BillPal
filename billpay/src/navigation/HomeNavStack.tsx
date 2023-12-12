import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/Home/Home';
import BillPayment from '../screens/BillPayment/BillPaymentShortcut';
import TransactionHistory from '../screens/TransactionHistory/TransactionHistory';
import FinancialEducation from '../screens/FinancialEducation/FinancialEducation';

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
      <Stack.Screen name="FinancialEducation" component={FinancialEducation} />
      <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
    </Stack.Navigator>
  );
}

export default HomeNavigationContainer;
