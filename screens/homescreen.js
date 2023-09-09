import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation'
import Home from './components/home'
import Bookings from './components/bookings'
import Profile from './components/profile';

const Tab = createMaterialBottomTabNavigator()

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Bookings" component={Bookings} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}