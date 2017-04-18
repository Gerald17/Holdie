/**
 * ./app/components/Home.js
 * @author  Jonathan Palma <tanpalma04@gmail.com>
 */
'use strict';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Button from './Button';
import NavBar from './NavBar';

class Home extends Component {

  render() {
    return (
      <View style={styles.container}>
        <NavBar icon="navigate-before" logo={true} />

        <Button>
          <View style={styles.button}>
            <Text style={styles.btnText}>Menu</Text>
          </View>
        </Button>

        <Button>
          <View style={styles.button}>
            <Text style={styles.btnText}>Main with Facebook</Text>
          </View>
        </Button>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  button: {
    flexDirection: 'row',
  },
  btnText: {
    flex: 1,
    alignSelf: 'center',
  },
});

export default Home;
