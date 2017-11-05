
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Login from './src/components/login';

export default class App extends Component {
  render() {
    return (
      <Login />
    );
  }
}

AppRegistry.registerComponent('app8', () => App);
