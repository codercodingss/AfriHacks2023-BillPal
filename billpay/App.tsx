import React from 'react';
import AuthNavigationContainer from './src/navigation/AuthNavigationContainer';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import HomeTabs from './src/navigation/BottomTabs';
import {useAppSelector} from './src/src/store';

function App(): React.JSX.Element {
  const {isAuthenticated} = useAppSelector(state => state.auth);
  return (
    <NavigationContainer>
      {isAuthenticated ? <HomeTabs /> : <AuthNavigationContainer />}
      <Toast />
    </NavigationContainer>
  );
}

export default App;
