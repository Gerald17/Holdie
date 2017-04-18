/**
 * ./app/containers/RegisterPage.js
 */
'use strict';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import RegisterForm from '../components/RegisterForm';

class RegisterPage extends Component {

  render() {
    return (
      <View style={styles.container}>
        <RegisterForm />
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

export default RegisterPage;
