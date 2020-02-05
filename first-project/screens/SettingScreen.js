import React, { Component } from "react";
import { View, Text } from "react-native";
import CustomActionButton from "../components/CustomActionButton";
import colors from "../assets/colors";
export default class SettingScreen extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.bgMain
        }}
      >
        <CustomActionButton
          title="Log Out"
          onPress={() => this.props.navigation.navigate("WelcomeScreen")}
          style={{
            width: 200,
            backgroundColor: "transparent",
            borderWidth: 0.5,
            borderColor: colors.bgError
          }}
        >
          <Text style={{ fontWeight: "100", color: "white" }}>Log Out</Text>
        </CustomActionButton>
      </View>
    );
  }
}
