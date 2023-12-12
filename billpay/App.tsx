import React, {useEffect} from 'react';
import AuthNavigationContainer from './src/navigation/AuthNavigationContainer';
import {NavigationContainer} from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import HomeTabs from './src/navigation/BottomTabs';
import {useAppSelector} from './src/src/store';
import BootSplash from 'react-native-bootsplash';

function App(): React.JSX.Element {
  useEffect(() => {
    const init = async () => {
      // …do multiple sync or async tasks
    };

    init().finally(async () => {
      await BootSplash.hide({fade: true});
    });
  }, []);
  const {isAuthenticated} = useAppSelector(state => state.auth);
  return (
    <NavigationContainer>
      {!isAuthenticated ? <HomeTabs /> : <AuthNavigationContainer />}
      <Toast />
    </NavigationContainer>
  );
}

export default App;
