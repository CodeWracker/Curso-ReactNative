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
import { createDrawerNavigator } from "react-navigation-drawer";
import WelcomeScreen from "./AppSwitchNavigator/WelcomeScreen";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import { Ionicons } from "@expo/vector-icons";
import SettingScreen from "./screens/SettingScreen";
import CustomDrawerComponent from "./screens/DrawerNavigator/CustomDrawerComponent";
import colors from "./assets/colors";

const App = () => <AppContainer></AppContainer>;

const LoginStackNavigator = createStackNavigator(
  {
    WelcomeScreen: {
      screen: WelcomeScreen,
      navigationOptions: {
        headerShown: false
      }
    },
    LoginScreen: {
      screen: LoginScreen,
      navigationOptions: {}
    }
  },
  {
    mode: "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: colors.bgMain
      }
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    HomeScreen: {
      screen: HomeScreen,
      navigationOptions: {
        title: "Home",
        drawerIcon: () => <Ionicons name="ios-home" size={24} />
      }
    },
    SettingScreen: {
      screen: SettingScreen,
      navigationOptions: {
        title: "Settings",
        drawerIcon: () => <Ionicons name="ios-settings" size={24} />
      }
    }
  },
  {
    contentComponent: CustomDrawerComponent
  }
);
const AppSwitchNavigator = createSwitchNavigator({
  LoginStackNavigator,
  LoginScreen,
  AppDrawerNavigator
});

const AppContainer = createAppContainer(AppSwitchNavigator);

export default App;
