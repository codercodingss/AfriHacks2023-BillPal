import React from 'react';
import AuthNavigationContainer from './src/navigation/AuthNavigationContainer';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <AuthNavigationContainer />
      <Toast />
    </NavigationContainer>
  );
}

export default App;
