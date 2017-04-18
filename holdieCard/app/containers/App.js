/**
 * ./app/containers/App.js
 * @author  Jonathan Palma <tanpalma04@gmail.com>
 */
'use strict';
import React, { Component } from 'react';
import { Actions, ActionConst, Scene, Router } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import configureStore from '../store/configureStore';

const RouterWithRedux = connect()(Router);

import InitPage from './InitPage';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import CardForm from '../components/CardForm';
import CardCreation from '../components/CardCreation';
import CardScanner from '../components/CardScanner';

import Main from '../components/Main';
import Home from '../components/Home';

import CardMenu from '../components/CardMenu';
import MyContacts from '../components/MyContacts';
import ContactDetail from '../components/ContactDetail';

const store = configureStore();

const scenes = Actions.create(
  <Scene key="root" hideNavBar={true}>
    <Scene key="init" component={InitPage} title="Init" />
    <Scene key="home" component={Home} title="Home" />
    <Scene key="main" component={Main} title="Main" type={ActionConst.REPLACE} />
    <Scene key="login" component={LoginPage} title="Login" type={ActionConst.REPLACE} />

    <Scene key="register" component={RegisterPage} title="Register" />
    <Scene key="cardform" component={CardForm} title="CardForm" />
    <Scene key="cardcreation" component={CardCreation} title="CardCreation" />
    <Scene key="cardcmenu" component={CardMenu} title="CardMenu" />
    <Scene key="cardscanner" component={CardScanner} title="CardScanner" />

    <Scene key="contacts" component={MyContacts} title="MyContacts" />
    <Scene key="details" component={ContactDetail} title="ContactDetail" />

  </Scene>
);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <RouterWithRedux scenes={scenes} animationStyle={animationStyle} />
      </Provider>
    );
  }
}

export const animationStyle = (props) => {
  const { layout, position, scene } = props;

  const direction = (scene.navigationState && scene.navigationState.direction) ?
    scene.navigationState.direction : 'horizontal';

  const index = scene.index;
  const inputRange = [index - 1, index, index + 1];
  const width = layout.initWidth;
  const height = layout.initHeight;

  const opacity = position.interpolate({
    inputRange,
    //default: outputRange: [1, 1, 0.3],
    outputRange: [1, 1, 0.5],
  });

  const scale = position.interpolate({
    inputRange,
    //default: outputRange: [1, 1, 0.95],
    outputRange: [1, 1, 1],
  });

  let translateX = 0;
  let translateY = 0;

  switch (direction) {
    case 'horizontal':
      translateX = position.interpolate({
        inputRange,
        //default: outputRange: [width, 0, -10],
        outputRange: [width, 0, 0],
      });
      break;
    case 'vertical':
      translateY = position.interpolate({
        inputRange,
        //default: outputRange: [height, 0, -10],
        outputRange: [height, 0, 0],
      });
      break;
  }

  return {
    opacity,
    transform: [
      { scale },
      { translateX },
      { translateY },
    ],
  };
};

export default App;
