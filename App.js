import React, { Component } from 'react';
import LoginView from './src/components/LoginView';
import HomeView from './src/components/HomeView';
import { Actions, Router, Scene } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={LoginView} title="Login" initial={true}  hideNavBar />
    <Scene key="home" component={HomeView} title="Home"
      onLeft={() => {Actions.pop()}} back = {true}
    />
  </Scene>
);

export default class App extends Component {
  render() {
    return <Router scenes={scenes} />;
  }
};

const renderCustomButton = () => {
  return () => (
    <TouchableOpacity>
      <Icon name="back" size={30} color="#900" />
    </TouchableOpacity>
  );
}
