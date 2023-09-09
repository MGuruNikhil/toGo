import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Loginscreen from './screens/loginscreen'
import Signupscreen from './screens/signupscreen'
import Homescreen from './screens/homescreen'


const Stack = createNativeStackNavigator()

const globalScreenOptions ={
  headerShown: false
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalScreenOptions}>
        <Stack.Screen name='login' component={Loginscreen} />
        <Stack.Screen name='signup' component={Signupscreen}/>
        <Stack.Screen name='home' component={Homescreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}