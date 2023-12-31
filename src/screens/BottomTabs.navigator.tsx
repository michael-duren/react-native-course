import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './Home.screen';
import History from './History.screen';
import Analytics from './Analytics.screen';

const BottomTabs = createBottomTabNavigator();

export default function BottomTabsNavigator() {
  return (
    <BottomTabs.Navigator>
      <BottomTabs.Screen name="Home" component={Home} />
      <BottomTabs.Screen name="History" component={History} />
      <BottomTabs.Screen name="Analytics" component={Analytics} />
    </BottomTabs.Navigator>
  );
}
