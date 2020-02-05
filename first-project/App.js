import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
  FlatList
} from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import WelcomeScreen from "./AppSwitchNavigator/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import SignUpScreen from "./screens/SignUpScreen";
const App = () => <AppContainer></AppContainer>;

const LoginStackNavigator = createStackNavigator({
  WelcomeScreen: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerShown: false
    }
  },
  SignUpScreen
});

const AppSwitchNavigator = createSwitchNavigator({
  LoginStackNavigator,
  SignUpScreen,
  HomeScreen
});
const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;
