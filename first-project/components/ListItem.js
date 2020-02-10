import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../assets/colors";

export default ListItem = ({ item, children }) => (
  <View style={styles.bookContainer}>
    <View style={styles.imageContainer}>
      <Image source={require("../assets/icon.png")} style={styles.image} />
    </View>
    <View style={styles.bookContent}>
      <Text style={styles.bookTitle}>{item.name}</Text>
    </View>
    {children}
  </View>
);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  bookContainer: {
    minHeight: 100,
    flexDirection: "row",
    backgroundColor: colors.bgListItem,
    alignItems: "center",
    marginVertical: 5
  },
  bookContent: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 5
  },
  imageContainer: {
    height: 70,
    width: 70,
    marginLeft: 10
  },
  image: {
    flex: 1,
    height: null,
    width: null,
    borderRadius: 35
  },
  bookTitle: {
    fontWeight: "100",
    fontSize: 22,
    color: colors.txtWhite
  }
});
