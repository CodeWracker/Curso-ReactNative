import React, { Component } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

export default class Appp extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView style={{ backgroundColor: "red" }} />
        <View style={{ height: 70, backgroundColor: "red" }}></View>
        <View style={{ flex: 1, backgroundColor: "blue" }}></View>
        <View style={{ height: 70, backgroundColor: "black" }}></View>
        <SafeAreaView style={{ backgroundColor: "black" }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  box: {
    height: 50,
    width: 50,
    backgroundColor: "red"
  }
});
