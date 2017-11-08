
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Routes from './src/routes';
import reducers from './src/reducers';

export default class App extends Component {
  render() {
    return (
      <Provider store={createStore(reducers)}>
        <Routes/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('app8', () => App);
