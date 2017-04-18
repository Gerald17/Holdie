/**
 * ./app/components/CardCreation.js
 * @author  Jonathan Palma <tanpalma04@gmail.com>
 */
'use strict';
import React, { Component, PropTypes } from 'react';
import { ListView, Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import Modal from 'react-native-modalbox';
import CardDesign from './CardDesign';

import Button from './Button';
import NavBar from './NavBar';

class CardCreation extends Component {
  static contextTypes = {
    routes: PropTypes.object.isRequired,
  }

  constructor(props, context) {
    super(props, context);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = { dataSource: ds, isOpen: false };
  }

  fetchCardStyles() {

  }

  openModal(id) {
    this.setState({ isOpen: true, selectedDesign: id });
  }

  closeModal(id) {
    this.setState({ isOpen: false });
  }

  render() {
    const { routes } = this.context;

    return (
      <View style={styles.container}>
        <NavBar icon="navigate-before" logo={true} />

        <Text style={styles.selecciona}>Selecciona el diseño de tu tarjeta</Text>

        <View style={styles.views}>
          <Button onPress={routes.main}>
            <View style={styles.button}>
              <Text style={styles.btnText}>CONTINUAR</Text>
            </View>
          </Button>
        </View>

        <ScrollView horizontal={true} style={styles.scroll}>
          <View style={styles.views}>
            <Button onPress={() => { this.openModal(1); }}>
              <View style={styles.buttonCard}>
                <Image source={require('./img/cardone.jpg')} style={styles.backgroundCard} />
              </View>
            </Button>

            <Button onPress={() => { this.openModal(2); }}>
              <View style={styles.buttonCard}>
                <Image source={require('./img/cardtwo.jpg')} style={styles.backgroundCard} />
              </View>
            </Button>
          </View>

          <View style={styles.views}>
            <Button onPress={() => { this.openModal(3); }}>
              <View style={styles.buttonCard}>
                <Image source={require('./img/cardthree.jpg')} style={styles.backgroundCard} />
              </View>
            </Button>

            <Button onPress={() => { this.openModal(4); }}>
              <View style={styles.buttonCard}>
                <Image source={require('./img/cardfour.jpg')} style={styles.backgroundCard} />
              </View>
            </Button>
          </View>
        </ScrollView>
        <Modal
          isOpen={this.state.isOpen}
          onClosed={this.closeModal.bind(this)}
          position="center"
        >
          <View style={{ backgroundColor: 'red', flex: 1, flexDirection: 'column' }}>
            <CardDesign design={this.state.selectedDesign} />

            <View style={{ flex: 1, flexDirection: 'column', height: 50, position: 'absolute', bottom: 0 }}>
              <View style={{ flex: 1, flexDirection: 'row' }}>
                <Button onPress={() => { this.setState({ isOpen: false }); }}>
                  <View style={[styles.saveCard, { backgroundColor: 'gray' }]}>
                    <Text style={[styles.cardActions, { color: 'white' }]}>CANCELAR</Text>
                  </View>
                </Button>
                <Button>
                  <View style={[styles.saveCard, { backgroundColor: '#B6C735' }]}>
                    <Text style={[styles.cardActions, { color: 'white' }]}>GUARDAR</Text>
                  </View>
                </Button>
              </View>
            </View>
          </View>

        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    flexDirection: 'column',
  },
  views: {
    flex: 1,
    flexDirection: 'row'
  },
  button: {
    backgroundColor: '#3db188',
    borderColor: '#bbded0',
    borderWidth: 2,
    width: 158,
    height: 40,
    flexDirection: 'row',
    flex: 1,
    margin: 10
  },
  buttonCard: {
    backgroundColor: '#3db188',
    borderColor: '#bbded0',
    borderWidth: 2,
    width: 158,
    height: 230,
    flexDirection: 'row',
    flex: 1,
  },
  selecciona: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 50
  },
  btnText: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#ffffff'
  },
  scroll: {
    height: 150,
    maxHeight: 240,
    backgroundColor: 'gray',
    flex: 1
  },
  backgroundCard: {
    flex: 1,
    resizeMode: 'cover',
    height: null,
    width: null
  },
  saveCard: {
    borderTopWidth: 4,
    borderTopColor: 'white',
    width: 180,
    height: 50,
  },
  cardActions: {
    fontSize: 14,
    alignSelf: 'center',
    paddingTop: 12
  },

});

export default CardCreation;
