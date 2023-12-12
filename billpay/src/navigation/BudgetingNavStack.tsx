import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Budgeting from '../screens/Budgeting/Budgeting';
import MyPlan from '../screens/Budgeting/MyPlan';
import TransactionHistory from '../screens/TransactionHistory/TransactionHistory';

const Stack = createStackNavigator();

function BudgetingNavigationContainer() {
  return (
    <Stack.Navigator
      initialRouteName="Budgeting"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Budgeting" component={Budgeting} />
      <Stack.Screen name="MyPlan" component={MyPlan} />
      <Stack.Screen name="TransactionHistory" component={TransactionHistory} />
    </Stack.Navigator>
  );
}

export default BudgetingNavigationContainer;
