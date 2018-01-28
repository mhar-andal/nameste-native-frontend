import React from "react";
import {
  Button,
  TouchableHighlight,
  StyleSheet,
  Text,
  View
} from "react-native";
import PropTypes from "prop-types";
// import Platform from "Platform";

import { withRouter } from "react-router-native";

class Homepage extends React.Component {
  static propTypes = {
    router: PropTypes.object,
    history: PropTypes.object
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.boxContainer}>
          <Text style={styles.logo}>nameste</Text>
        </View>
        <View style={styles.boxContainer}>
          <View style={[styles.buttonContainer, styles.login]}>
            <Button
              title="LOGIN"
              onPress={() => {
                this.props.history.push("/login");
              }}
              style={styles.button}
              color="white"
            />
          </View>
          <View style={[styles.buttonContainer, styles.signup]}>
            <Button
              title="SIGNUP"
              onPress={() => {
                this.props.history.push("/login");
              }}
              style={styles.button}
              color="white"
            />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  boxContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  buttonContainer: {
    width: 300,
    borderRadius: 10
  },
  button: {
    color: "white",
    borderRadius: 10
  },
  submit: {
    marginRight: 40,
    marginLeft: 40,
    marginTop: 10,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#68a0cf",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff"
  },
  signup: {
    top: 40,
    backgroundColor: "#2A4755"
  },
  login: {
    backgroundColor: "#54D586"
  },
  logo: {
    color: "white",
    fontSize: 62,
    fontFamily: "quicksand",
    backgroundColor: "rgba(0,0,0,0)",
    top: 80
  }
});

export default withRouter(Homepage);
