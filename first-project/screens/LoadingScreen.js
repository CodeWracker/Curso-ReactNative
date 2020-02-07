import React, { Component } from "react";
import { View, Text, StyleSheet, ActivityIndicator } from "react-native";
import * as firebase from "firebase/app";
import "firebase/auth";
import colors from "../assets/colors";

export default class LoadingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.checkIfLoggedIn();
  }
  checkIfLoggedIn = () => {
    this.unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.props.navigation.navigate("HomeScreen", { user });
      } else {
        this.props.navigation.navigate("LoginStackNavigator");
      }
    });
  };
  componentWillUnmount = () => {
    this.unsubscribe();
  };

  render() {
    return (
      <View style={styles.conatiner}>
        <ActivityIndicator
          size="large"
          color={colors.logoColor}
        ></ActivityIndicator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  conatiner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.bgMain
  }
});
