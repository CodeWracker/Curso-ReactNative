import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import PropTypes from "prop-types";

function getPosition(position) {
  switch (position) {
    case "left":
      return { position: "absolute", left: 20, bottom: 20 };
    default:
      return { position: "absolute", right: 20, bottom: 20 };
  }
}

const CustomActionButton = ({ children, onPress, style, position }) => {
  const floatingActionButton = position ? getPosition(position) : [];
  return (
    <TouchableOpacity style={floatingActionButton} onPress={onPress}>
      <View style={[styles.button, style]}>{children}</View>
    </TouchableOpacity>
  );
};
export default CustomActionButton;

CustomActionButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  styles: PropTypes.object
};
CustomActionButton.defaultProps = {
  style: {}
};

const styles = StyleSheet.create({
  button: {
    width: 50,
    height: 50,
    backgroundColor: "#deada5",
    alignItems: "center",
    justifyContent: "center"
  }
});
