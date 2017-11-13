
import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import Routes from './src/routes';
import reducers from './src/reducers';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

export default class App extends Component {

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyAizw52XG6ZEVgPJK9FEqCKZYmMSoc9kQk",
      authDomain: "projeto-teste-c29ea.firebaseapp.com",
      databaseURL: "https://projeto-teste-c29ea.firebaseio.com",
      projectId: "projeto-teste-c29ea",
      storageBucket: "projeto-teste-c29ea.appspot.com",
      messagingSenderId: "270582595521"
    });
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes/>
      </Provider>
    );
  }
}

AppRegistry.registerComponent('app8', () => App);
