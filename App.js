import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { NativeRouter, Route } from "react-router-native";
import { Provider } from "react-redux";
import { Font, AppLoading } from "expo";
import configureStore from "./store/store";

import Homepage from "./Homepage";
import Login from "./containers/Login";

const store = configureStore();

export default class App extends React.Component {
  state = {
    isReady: false
  };

  async componentWillMount() {
    await Font.loadAsync({
      // prettier-ignore
      'quicksand': require("./assets/fonts/Quicksand-Light.ttf") //eslint-disable-line
    });
    this.setState({ isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />;
    }
    return (
      <Provider store={store}>
        <NativeRouter>
          <View style={styles.container}>
            <Route exact path="/" component={Homepage} />
            <Route path="/login" component={Login} />
            <Image
              style={styles.backgroundImage}
              source={require("./images/background.jpeg")} //eslint-disable-line
              blurRadius={10}
            />
          </View>
        </NativeRouter>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row"
  },
  backgroundImage: {
    position: "absolute",
    resizeMode: "cover", // or 'stretch'
    zIndex: -10
  }
});
