import React, { Component } from "react";
import PropTypes from "prop-types";
import { StyleSheet, Text, TextInput, View } from "react-native";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello, welcome to our app</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});

export default Login;
