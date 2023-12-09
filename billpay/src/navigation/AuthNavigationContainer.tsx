import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import PasswordResetLink from '../screens/PasswordResetLink/PasswordResetLink';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import Register from '../screens/Register/Register';

const Stack = createStackNavigator();

function AuthNavigationContainer() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      <Stack.Screen name="PasswordResetLink" component={PasswordResetLink} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
      <Stack.Screen name="Register" component={Register} />
    </Stack.Navigator>
  );
}

export default AuthNavigationContainer;
