import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import AppStack from './Appstack';
import Splash from '../pages/Splash';
import {useGlobal} from '../Hooks/GloblaContext';
import AuthStack from './AuthStack';
import { StatusBar } from 'react-native';

const Stack = createNativeStackNavigator();

function MainStack() {
  const {loading, authData, colors} = useGlobal();
  if (loading) {
    return <Splash />;
  }
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={colors?.AppThemeColor} barStyle={'light-content'} />
      {authData ? <AppStack /> : <AuthStack/>}
    </NavigationContainer>
  );
}

export default MainStack;
