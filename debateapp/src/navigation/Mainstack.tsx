import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './Appstack';
import Splash from '../pages/Splash';

const Stack = createNativeStackNavigator();

function MainStack() {
    if (true) {
        return <Splash />;
      }
  return (
    <NavigationContainer>
      <AppStack/>
    </NavigationContainer>
  );
}

export default MainStack