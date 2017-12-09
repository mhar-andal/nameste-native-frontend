import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import Login from './containers/Login.js';

const DEFAULT_NAME = 'Somebody'

export default class App extends React.Component {
  state = {};

  componentWillMount() {
    // axios.get('http://localhost:3000/test/test')
    // .then((response) => {
    //   console.log('response', response);
    //   const { name } = response.data
    //   this.setState({
    //     name
    //   })
    // });
  }
  render() {
    return (
      <View style={styles.container}>
        <Login />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
