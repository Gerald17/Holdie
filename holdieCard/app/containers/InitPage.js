/**
 * ./app/containers/InitPage.js
 * @author  Jonathan Palma <tanpalma04@gmail.com>
 */
'use strict';
import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GiftedSpinner from 'react-native-gifted-spinner';

import * as Db from '../utils/db';


class InitPage extends Component {
  static contextTypes = {
    routes: PropTypes.object.isRequired,
  };

  componentDidMount() {
    const { routes } = this.context;

    this.asyncLoad()
      .then((data) => {
        console.log('Resolved', data);

        switch (data) {
          case 'main':
            routes.main();
            break;
          case 'cardform':
            routes.cardform();
            break;
          default:
            routes.login();
            break;
        }
      })
      .catch((e) => {
        console.log('Rejected', e);
        routes.login();
      })
      .done();
  }

  asyncLoad() {
    return new Promise((resolve, reject) => {
      console.log('Getting session from db');
      Db.findObject('session')
        .then((data) => {
          console.log('Result: ', data);
          if (data) {
            reject(data); // Remove after add log out function

            /*
            if([user already has almost 1 card]) {
              resolve('main');
            } else {
              resolve('cardform');
            }
            */

          } else {
            reject(null);
          }
        })
        .catch((e) => {
          console.log(e);
          reject(e);
        })
        .done();
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Cargando configuraciones...</Text>
        <GiftedSpinner />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default InitPage;
