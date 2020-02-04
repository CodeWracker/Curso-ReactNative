import React, { Component } from "react";
import { View, Text } from "react-native";

export default class BookCount extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text style={{ fontSize: 20 }}>{this.props.title}</Text>
        <Text>{this.props.count}</Text>
      </View>
    );
  }
}
