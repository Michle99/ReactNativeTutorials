import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './Login';
import MyVideo from './MyVideo';
import Cakelist from './Cakelist';
import {NavigationContainer} from "@react-navigation/native"
import {createNativeStackNavigator} from "@react-navigation/native-stack"
import Cakedetails from './Cakedetails';
import store from './reduxstore/store';
import { Provider } from 'react-redux';

var video = {
  url:"https://nodetrainingbucket.s3.ap-southeast-1.amazonaws.com/FC+Barcelona+-+The+Glory+Days+-+Official+Movie.mp4"
}
export default function App() {
  let Stack  =  createNativeStackNavigator()
  return (
    <Provider store ={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Cakelist}></Stack.Screen>
        <Stack.Screen name="Login" component={Login}></Stack.Screen>
        <Stack.Screen name="CakeDetails" component={Cakedetails}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
