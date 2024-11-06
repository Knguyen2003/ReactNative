import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Screen2 from './pages/screen2';
import Screen3 from './pages/screen3';
import Screen1 from './pages/screen1';
import store from './redux_toolkit/store';



import { Provider } from 'react-redux';


const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Screen1" >
         <Stack.Screen name="Screen1" component={Screen1} />
         <Stack.Screen name="Screen2" component={Screen2} />
         <Stack.Screen name="Screen3" component={Screen3} />
         
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}