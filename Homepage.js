import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Link } from 'react-router-native';

export default class Homepage extends React.Component {

  render() {
    return (
      <View style={styles.container}>
        <Link
          to="/login"
        >
          <Text>Login</Text>
        </Link>
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
