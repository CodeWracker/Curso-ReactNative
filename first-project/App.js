import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Appp extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          borderWidth: 5,
          borderColor: "red"
        }}
      >
        <View style={[{ flex: 1, backgroundColor: "blue" }]}></View>
        <View style={[{ flex: 1, backgroundColor: "orange" }]}></View>
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
