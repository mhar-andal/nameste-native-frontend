import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dimensions,
  Text,
  TextInput,
  StyleSheet,
  View
} from 'react-native';
import { Link } from 'react-router-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { signIn } from '../store/Account/actions';

class Login extends Component {
  static propTypes = {
    signIn: PropTypes.func,
  };

  constructor(props) {
    super(props);

    const { width, height } = Dimensions.get('window');
    console.log('promise', Promise);
    this.state = {
      email: '',
      username: '',
      password: '',
      firstName: '',
      lastName: '',
      emailPlaceholder: 'example@gmail.com',
      usernamePlaceholder: 'johndoe10',
      passwordPlaceholder: '············',
      firstNamePlaceholder: 'Joe',
      lastNamePlaceholder: 'Doe',
      width: width - 40,
      height,
      isAuthenticated: false,
      errors: []
    };
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    const {
      email,
      username,
      password,
      firstName,
      lastName,
    } = this.state;
    const account = {
      email,
      username,
      password,
      firstName,
      lastName,
    };
    this.props.signIn(account)
    .then((response) => {
      this.setState({
        sessionId: response.data.id,
        isAuthenticated: true,
      })
    })
    .catch((error) => {
      this.setState({ errors: error.response.data.errors });
    });
  }

  renderLoginForm() {
    const { width } = this.state;
    return (
      <View style={styles.container}>
        <Link to="/">
          <Text>Back</Text>
        </Link>
        <Text>Email</Text>
        <TextInput
          style={{ height: 30, width: width, borderColor: 'black', borderWidth: 1 }}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
          autoCorrect={false}
          placeholder={this.state.emailPlaceholder}
        />
        <Text>Username</Text>
        <TextInput
          style={{ height: 30, width: width, borderColor: 'black', borderWidth: 1 }}
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
          autoCorrect={false}
          placeholder={this.state.usernamePlaceholder}
        />
        <Text>Password</Text>
        <TextInput
          style={{ height: 30, width: width, borderColor: 'black', borderWidth: 1 }}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
          secureTextEntry={true}
          autoCorrect={false}
          placeholder={this.state.passwordPlaceholder}
        />
        <Text>First Name</Text>
        <TextInput
          style={{ height: 30, width: width, borderColor: 'black', borderWidth: 1 }}
          onChangeText={(firstName) => this.setState({ firstName })}
          value={this.state.firstName}
          autoCorrect={false}
          placeholder={this.state.firstNamePlaceholder}
        />
        <Text>Last Name</Text>
        <TextInput
          style={{ height: 30, width: width, borderColor: 'black', borderWidth: 1 }}
          onChangeText={(lastName) => this.setState({ lastName })}
          value={this.state.lastName}
          autoCorrect={false}
          placeholder={this.state.lastNamePlaceholder}
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

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(Object.assign({},
    { signIn },
  ), dispatch);
}
export default connect(null, mapDispatchToProps)(Login)
