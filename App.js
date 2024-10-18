import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TasksScreen from './screen/TasksScreen';
import TaskEditScreen from './screen/TaskEditScreen';
import TaskContextProvider from './store/task-context';
import LoginScreen from './screen/LoginScreen';
import RegisterScreen from './screen/RegisterScreen';


const Stack = createStackNavigator();
export default function App() {
  return (
    <>
    <StatusBar style='dark'/>
    <TaskContextProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerLeft:false}}>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Register" component={RegisterScreen}/>
          <Stack.Screen name='Task' component={TasksScreen} />
          <Stack.Screen name='Edit' component={TaskEditScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </TaskContextProvider>
    </>
  );
}

const styles = StyleSheet.create({
  
});
