/**
 * ./app/containers/LoginPage.js
 */
'use strict';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import LoginForm from '../components/LoginForm';
import LoginSocial from '../components/LoginSocial';

class LoginPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <LoginForm />
        <LoginSocial />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#B6C735',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default LoginPage;
