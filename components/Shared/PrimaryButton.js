import React, { Component } from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';

class PrimaryButton extends Component {
  static propTypes = {
    color: PropTypes.string,
    handleMethod: PropTypes.func,
    title: PropTypes.string,
  }

  constructor(props){
    super(props);
    this.state = {
      handleMethod: () => {}
    };
  }

  componentWillMount() {
    if(typeof this.props.handleMethod === 'function') {
      this.setState({
        handleMethod: this.props.handleMethod,
      });
    }
  }
  render() {
    const title = this.props.title || '';
    return <Button
      onPress={this.state.handleMethod}
      title={title}
      color={this.props.color}
    />
  }
}

export default PrimaryButton;
