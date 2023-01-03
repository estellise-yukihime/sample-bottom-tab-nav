/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import * as React from 'react';
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { HomeScreen } from "./lib/home_screen";
import { CartScreen } from "./lib/cart_screen";
import { ProfileScreen } from "./lib/profile_screen";

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="home"
        screenOptions={{
          tabBarActiveTintColor: '#e91e63',
          tabBarStyle: {
            height: 70
          },
          tabBarIconStyle: {
            flex: 2,
          },
          tabBarLabelStyle: {
            flex: 1,
            fontSize: 10,
            fontWeight: 'bold'
          },
          headerStyle: {
            height: 50,
            backgroundColor: '#1e7898',
          },
          headerTitleStyle: {
            color: '#ffffff'
          }
        }}>
        <Tab.Screen name="home" component={HomeScreen}
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons name="home" color={color} size={size} />
              );
            },
          }} />
        <Tab.Screen name="cart" component={CartScreen}
          options={{
            title: 'Cart',
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons name="cart" color={color} size={size} />
              );
            }
          }} />
        <Tab.Screen name="profile" component={ProfileScreen}
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => {
              return (
                <MaterialCommunityIcons name="face-man-profile" color={color} size={size} />
              );
            }
          }} />
      </Tab.Navigator >
    </NavigationContainer >
  );
};

const styles = StyleSheet.create({});

export default App;
