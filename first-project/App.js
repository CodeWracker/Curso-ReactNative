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
import WelcomeScreen from "./AppSwitchNavigator/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
const App = () => <AppContainer></AppContainer>;

const AppSwitchNavigator = createSwitchNavigator({
  WelcomeScreen,
  HomeScreen
});
const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;
