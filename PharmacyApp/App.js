import React from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createStackNavigator} from "@react-navigation/stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Home from './app/screens/Home';
import MedList from './app/screens/MedList';
import EditList from './app/screens/EditList';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab=createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home"
        tabBarOptions={{
          labelStyle: {
            fontSize: 15,
            marginBottom: 20,
            padding: 0,
            fontWeight:'bold'
          },
          activeTintColor: 'white',
          inactiveTintColor: 'black',
          activeBackgroundColor:'black',
          inactiveBackgroundColor:'white'
        }}
      >
        <Tab.Screen name="Home" component={Home}></Tab.Screen>
        <Tab.Screen name="Medicine List" component={MedList}></Tab.Screen>
        <Tab.Screen name="Edit Medicines" component={EditList}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>

  );
};