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

import BookCount from "../components/BookCount";
import { Ionicons } from "@expo/vector-icons";
import CustomActionButton from "../components/CustomActionButton";
import colors from "../assets/colors";
import * as firebase from "firebase/app";
import { snapshotToArray } from "../helpers/firebaseHelpers";

export default class HomeScreen extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: {},
      totalCount: 0,
      readingCount: 0,
      readCount: 0,
      isAddNewBookVisible: false,
      textInputData: "",
      books: [],
      booksReading: [],
      booksRead: []
    };
  }

  componentDidMount = async () => {
    const { navigation } = this.props;
    const user = navigation.getParam("user");

    const currentUserData = await firebase
      .database()
      .ref("users")
      .child(user.uid)
      .once("value");

    const books = await firebase
      .database()
      .ref("books")
      .child(user.uid)
      .once("value");
    const booksArray = snapshotToArray(books);
    this.setState({
      currentUser: currentUserData.val(),
      books: booksArray,
      booksReading: booksArray.filter(book => !book.read),
      booksRead: booksArray.filter(book => book.read)
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.readCount < this.state.readCount) {
      console.log("fetch data");
    }
  }
  componentWillUnmount() {}

  showAddNewBook = () => {
    this.setState({ isAddNewBookVisible: true });
  };
  hideAddNewBook = () => {
    this.setState({ isAddNewBookVisible: false });
  };
  addBook = async book => {
    try {
      //books
      //users.id(key)
      //books data
      const snapshot = await firebase
        .database()
        .ref("books")
        .child(this.state.currentUser.uid)
        .orderByChild("name")
        .equalTo(book)
        .once("value");
      if (snapshot.exists()) {
        alert("book already exists");
      } else {
        const key = await firebase
          .database()
          .ref("books")
          .child(this.state.currentUser.uid)
          .push().key;

        const response = await firebase
          .database()
          .ref("books")
          .child(this.state.currentUser.uid)
          .child(key)
          .set({ name: book, read: false });
      }
    } catch (error) {
      console.log(error);
    }

    this.setState(
      (state, props) => ({
        books: [...state.books, { name: book, read: false }],
        booksReading: [...state.booksReading, { name: book, read: false }],
        //totalCount: state.totalCount + 1,
        //readingCount: state.readingCount + 1,
        isAddNewBookVisible: false
      }),
      () => {}
    );
  };

  markAsRead = (selectedBook, index) => {
    let books = this.state.books.map(book => {
      if (book.name == selectedBook.name) {
        return { ...book, read: true };
      }
      return book;
    });
    let booksReading = this.state.booksReading.filter(
      book => book.name !== selectedBook.name
    );
    this.setState(prevState => ({
      books: books,
      booksReading: booksReading,
      booksRead: [...prevState.booksRead, { name: selectedBook, read: true }]
      //readingCount: prevState.readingCount - 1,
      //readCount: prevState.readCount + 1
    }));
  };

  renderItem = (item, index) => (
    <View style={styles.bookContainer}>
      <View style={styles.bookContent}>
        <Text>{item.name}</Text>
      </View>
      {item.read ? (
        <Ionicons name="ios-checkmark" color={colors.logoColor} size={30} />
      ) : (
        <CustomActionButton
          onPress={() => this.markAsRead(item, index)}
          style={styles.markAsReadButton}
        >
          <Text>Mark as Read</Text>
        </CustomActionButton>
      )}
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
          <BookCount title="Total" count={this.state.books.length} />
          <BookCount title="Reading" count={this.state.booksReading.length} />
          <BookCount title="Read" count={this.state.booksRead.length} />
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
    backgroundColor: colors.bgSucces
  },
  header: {
    height: 70,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.borderColor,
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
    backgroundColor: colors.bgTextInput
  },
  addNewBookButton: {
    backgroundColor: colors.bgSucces
  },
  emptyListContainer: {
    marginTop: 50,
    alignItems: "center"
  },
  emptyListText: {
    fontWeight: "bold"
  },
  showAddNewBookButton: {
    backgroundColor: colors.bgPrimary,
    borderRadius: 25
  },
  showAddNewBookText: {
    color: "white",
    fontSize: 30
  },
  footerContainer: {
    height: 70,
    borderTopWidth: 0.5,
    borderTopColor: colors.borderColor,
    flexDirection: "row"
  }
});
