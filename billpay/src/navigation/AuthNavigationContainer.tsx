import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '../screens/Login/Login';
import ForgotPassword from '../screens/ForgotPassword/ForgotPassword';
import PasswordResetLink from '../screens/PasswordResetLink/PasswordResetLink';
import ResetPassword from '../screens/ResetPassword/ResetPassword';
import Register from '../screens/Register/Register';
import RegisterStepTwo from '../screens/Register/RegisterStepTwo';
import RegisterStepFour from '../screens/Register/RegisterStepFour';
import RegistrationFinalStep from '../screens/Register/RegistrationFinalStep';
import AccountCreationSucces from '../screens/Register/AccountCreationSucces';

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
      <Stack.Screen name="RegistrationStepTwo" component={RegisterStepTwo} />
      <Stack.Screen name="RegistrationStepFour" component={RegisterStepFour} />
      <Stack.Screen
        name="AccountCreationSucces"
        component={AccountCreationSucces}
      />
      <Stack.Screen
        name="RegistrationFinalStep"
        component={RegistrationFinalStep}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigationContainer;
