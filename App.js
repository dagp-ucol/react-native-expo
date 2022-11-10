import React, { Component } from 'react';
import LoginView from './src/components/LoginView';
import HomeView from './src/components/HomeView';
import { Actions, Router, Scene } from 'react-native-router-flux';
// import { Switch } from 'react-native-web';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginView} title="Login" initial={true} hideNavBar />
    <Scene key="home" component={HomeView} title="Home" />
  </Scene>
);

export default class App extends Component {
  render() {
    return <Router scenes={scenes} />;
  }
};
