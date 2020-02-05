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

import BookCount from "./components/BookCount";
import { Ionicons } from "@expo/vector-icons";
import CustomActionButton from "./components/CustomActionButton";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      totalCount: 0,
      readingCount: 0,
      readCount: 0,
      isAddNewBookVisible: false,
      textInputData: "",
      books: []
    };
  }

  showAddNewBook = () => {
    this.setState({ isAddNewBookVisible: true });
  };
  hideAddNewBook = () => {
    this.setState({ isAddNewBookVisible: false });
  };
  addBook = book => {
    this.setState(
      (state, props) => ({
        books: [...state.books, book],
        totalCount: state.totalCount + 1,
        readingCount: state.readingCount + 1
      }),
      () => {}
    );
  };

  markAsRead = (selectedBook, index) => {
    let newList = this.state.books.filter(book => book !== selectedBook);
    this.setState(prevState => ({
      books: newList,
      readingCount: prevState.readingCount - 1,
      readCount: prevState.readCount + 1
    }));
  };

  renderItem = (item, index) => (
    <View style={styles.bookContainer}>
      <View style={styles.bookContent}>
        <Text>{item}</Text>
      </View>
      <CustomActionButton
        onPress={() => this.markAsRead(item, index)}
        style={styles.markAsReadButton}
      >
        <Text>Mark as Read</Text>
      </CustomActionButton>
    </View>
  );

  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView />
        <View style={styles.header}>
          <Text style={styles.headerTitle}>Book Worm</Text>
        </View>
        <View style={styles.container}>
          {this.state.isAddNewBookVisible && (
            <View style={styles.textInputContainer}>
              <TextInput
                style={styles.textInputBox}
                placeholder="Enter Book Name"
                placeholderTextColor="grey"
                onChangeText={text => this.setState({ textInputData: text })}
              ></TextInput>
              <CustomActionButton
                style={styles.addNewBookButton}
                onPress={() => this.addBook(this.state.textInputData)}
              >
                <Ionicons name="ios-checkmark" color="white" size={40} />
              </CustomActionButton>
              <CustomActionButton onPress={this.hideAddNewBook}>
                <Ionicons name="ios-close" color="white" size={40} />
              </CustomActionButton>
            </View>
          )}
          <FlatList
            data={this.state.books}
            renderItem={({ item }, index) => this.renderItem(item, index)}
            keyExtractor={(item, index) => index.toString()}
            ListEmptyComponent={
              <View style={styles.emptyListContainer}>
                <Text style={styles.emptyListText}>No Books yet</Text>
              </View>
            }
          />
          <CustomActionButton
            onPress={this.showAddNewBook}
            style={styles.showAddNewBookButton}
            position="right"
          >
            <Text style={styles.showAddNewBookText}>+</Text>
          </CustomActionButton>
        </View>
        <View style={styles.footerContainer}>
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
    flex: 1
  },
  bookContainer: {
    height: 50,
    flexDirection: "row"
  },
  bookContent: {
    flex: 1,
    justifyContent: "center",
    paddingLeft: 5
  },
  markAsReadButton: {
    width: 100,
    backgroundColor: "#a5deba"
  },
  header: {
    height: 70,
    borderBottomWidth: 0.5,
    borderBottomColor: "#E9E9E9",
    alignItems: "center",
    justifyContent: "center"
  },
  headerTitle: {
    fontSize: 24
  },
  textInputContainer: {
    height: 50,
    flexDirection: "row"
  },
  textInputBox: {
    flex: 1,
    backgroundColor: "#ececec"
  },
  addNewBookButton: {
    backgroundColor: "#a5deba"
  },
  emptyListContainer: {
    marginTop: 50,
    alignItems: "center"
  },
  emptyListText: {
    fontWeight: "bold"
  },
  showAddNewBookButton: {
    backgroundColor: "#AAd1E6",
    borderRadius: 25
  },
  showAddNewBookText: {
    color: "white",
    fontSize: 30
  },
  footerContainer: {
    height: 70,
    borderTopWidth: 0.5,
    borderTopColor: "#E9E9E9",
    flexDirection: "row"
  }
});
