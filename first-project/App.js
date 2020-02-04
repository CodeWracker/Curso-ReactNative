import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  TextInput
} from "react-native";

import BookCount from "./components/BookCount";
import { Ionicons } from "@expo/vector-icons";

export default class Appp extends Component {
  constructor() {
    super();
    this.state = {
      totalCount: 0,
      readingCount: 0,
      readCount: 0
    };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SafeAreaView />
        <View
          style={{
            height: 70,
            borderBottomWidth: 0.5,
            borderBottomColor: "#E9E9E9",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Text style={{ fontSize: 24 }}>Book Worm</Text>
        </View>
        <View style={{ flex: 1 }}>
          <View style={{ height: 50, flexDirection: "row" }}>
            <TextInput
              style={{ flex: 1, backgroundColor: "#ececec" }}
              placeholder="Enter Book Name"
              placeholderTextColor="grey"
            ></TextInput>
            <TouchableOpacity>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#a5deba",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Ionicons name="ios-checkmark" color="white" size={40} />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View
                style={{
                  width: 50,
                  height: 50,
                  backgroundColor: "#deada5",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <Ionicons name="ios-close" color="white" size={40} />
              </View>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{ position: "absolute", bottom: 20, right: 20 }}
          >
            <View
              style={{
                width: 50,
                height: 50,
                borderRadius: 25,
                backgroundColor: "#AAd1E6",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Text style={{ color: "white", fontSize: 30 }}>+</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: 70,
            borderTopWidth: 0.5,
            borderTopColor: "#E9E9E9",
            flexDirection: "row"
          }}
        >
          <BookCount title="Total" count={this.state.totalCount} />
          <BookCount title="Reading" count={this.state.readingCount} />
          <BookCount title="Read" count={this.state.readCount} />
        </View>
        <SafeAreaView />
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
