import React, { Component } from 'react';
import {
  Button,
  Dimensions,
  Text,
  TextInput,
  StyleSheet,
  View
} from 'react-native';
import axios from 'axios';

export default class Login extends Component {
  constructor(props) {
    super(props);

    const { width, height } = Dimensions.get('window');

    this.state = {
      email: '',
      password: '',
      emailPlaceholder: 'example@gmail.com',
      passwordPlaceholder: '············',
      width: width - 40,
      height,
      isAuthenticated: false,
      error: []
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    axios.post('http://localhost:3000/v1/users')
    .then((response) => {
      console.log('response', response);
    });
  }

  renderLoginForm() {
    const { width } = this.state;
    return (
      <View style={styles.container}>
        <Text>Email</Text>
        <TextInput
          style={{ height: 30, width: width, borderColor: 'black', borderWidth: 1 }}
          onChange={(email) => this.setState({ email })}
          value={this.state.email}
          placeholder={this.state.emailPlaceholder}
        />
        <Text>Password</Text>
        <TextInput
          style={{ height: 30, width: width, borderColor: 'black', borderWidth: 1 }}
          onChange={(password) => this.setState({ password })}
          value={this.state.password}
          secureTextEntry={true}
          placeholder={this.state.passwordPlaceholder}
        />
        <Button
          onPress={this.handleLogin}
          title="Sign Up"
          color="#841584"
        />
    </View>
    )
  }

  render() {
    const { isAuthenticated } = this.state;
    return isAuthenticated
    ? <View><Text>Hello, welcome to our app</Text></View>
    : this.renderLoginForm();

  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
