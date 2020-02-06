import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import colors from "../assets/colors";
import CustomActionButton from "../components/CustomActionButton";
import { color } from "react-native-reanimated";

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: "center" }}>
          <TextInput
            style={styles.textInput}
            placeholder="example@email.com"
            placeholderTextColor={colors.bgTextInputDark}
            keyboardType="email-address"
          />
          <TextInput
            placeholder="password"
            placeholderTextColor={colors.bgTextInputDark}
            style={styles.textInput}
            secureTextEntry
          />
          <View style={{ alignItems: "center" }}>
            <CustomActionButton
              style={[styles.loginButtons, { borderColor: colors.bgPrimary }]}
            >
              <Text style={{ color: "white" }}>Login</Text>
            </CustomActionButton>
            <CustomActionButton
              style={[styles.loginButtons, { borderColor: colors.bgError }]}
            >
              <Text style={{ color: "white" }}>Sign Up</Text>
            </CustomActionButton>
          </View>
        </View>
        <View style={{ flex: 1 }} />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgMain
  },
  textInput: {
    borderWidth: 0.5,
    borderColor: colors.borderColor,
    height: 50,
    marginHorizontal: 40,
    marginBottom: 10,
    color: colors.txtWhite,
    paddingHorizontal: 10
  },
  loginButtons: {
    borderWidth: 0.5,
    backgroundColor: "transparent",
    marginTop: 10,
    width: 200
  }
});
