import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './screens/BottomTabs.navigator';

export default function App() {
  return (
    <NavigationContainer>
      <BottomTabsNavigator />
    </NavigationContainer>
  );
}
