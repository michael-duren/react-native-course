import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './screens/BottomTabs.navigator';
import AppProvider from './App.provider';

export default function App() {
  return (
    <AppProvider>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </AppProvider>
  );
}
