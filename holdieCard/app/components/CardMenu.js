/**
 * ./app/components/CardMenu.js
 * @author  Jonathan Palma <tanpalma04@gmail.com>
 */
'use strict';
import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Share from 'react-native-share';

import Button from './Button';

class CardMenu extends Component {
  static contextTypes = {
    routes: PropTypes.object.isRequired,
  }

  render() {
    const { routes } = this.context;

    const shareOptions = {
      title: 'Holdie Card',
      message: 'Quiero invitarte a que uses Holdie Card!',
      url: 'http://holdie-card.com',
      subject: 'Holdie Card'
    };

    return (
      <View style={styles.container}>

        <Button onPress={routes.cardform}>
          <View style={styles.button}>
            <Text style={styles.btnText}>Crear una tarjeta</Text>
          </View>
        </Button>

        <Button onPress={routes.cardscanner}>
          <View style={styles.button}>
            <Text style={styles.btnText}>Scanear una tarjeta</Text>
          </View>
        </Button>

        <Button onPress={() => { Share.open(shareOptions); }}>
          <View style={styles.button}>
            <Text style={styles.btnText}>Invita a tus amigos</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: '#4ac087',
    borderColor: '#bbded0',
    borderWidth: 2,
    width: 250,
    height: 80,
    flexDirection: 'row',
    margin: 10
  },
  btnText: {
    flex: 1,
    color: '#fff',
    textAlign: 'center',
    alignSelf: 'center',
  },
});

export default CardMenu;
