/**
 * ./app/components/ContactDetails.js
 * @author  Jonathan Palma <tanpalma04@gmail.com>
 */
'use strict';
import React, { Component } from 'react';
import { Alert, ListView, StyleSheet, Text, View, Image } from 'react-native';
import { Makiko } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Share from 'react-native-share';
import Button from './Button';


const logo = require('./img/camera.png');

class ContactDetails extends Component {
  constructor(props, context) {
    super(props, context);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = { selectedSegment: 'Nombre', dataSource: ds };
  }

  askDelete() {
    Alert.alert(
      'Eliminar',
      '¿Está seguro que desea eliminar esta tarjeta?',
      [
        { text: 'Sí', onPress: () => this.infoDelete() },
        { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' }
      ]
    );
  }

  infoDelete() {
    Alert.alert(
      'Eliminar',
      'La tarjeta ha sido eliminada satisfactoriamente',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ]
    );
  }


  render() {
    let shareOptions = {
      title: 'Holdie Card',
      message: 'Quiero compartir la tarjeta  de mi contacto con tigo',
      url: 'http://holdie-card.com',
      subject: 'Holdie Card'
    };

    return (
      <View style={styles.container}>


        {(this.state.selectedSegment === 'Nombre') ?
          <Text style={styles.separator}>CATEGORIA</Text>
          :
          <Text style={styles.separator}>Diseño gráfico</Text>
        }

        <View style={styles.rowContact}>


          <View style={styles.rows}>
            <Image style={{ marginLeft: 20, marginBottom: 30, width: 70, height: 70 }} source={logo} />
            <Text style={styles.smallText}>Gerardo Alexander Estrada</Text>

            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 45, marginLeft: 20 }}>
              <View style={{ flexDirection: 'row', width: 40, height: 40, backgroundColor: '#58CCA1' }}>
                <Icon name="account-circle" style={[styles.icon, { color: '#ffffff', fontSize: 20, alignSelf: 'center', marginLeft: 10 }]} />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#023859', fontSize: 15, marginTop: 10, marginLeft: 20 }}>gerardo.estrada.dg@gmail.com</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 45, marginLeft: 20 }}>
              <View style={{ flexDirection: 'row', width: 40, height: 40, backgroundColor: '#58CCA1' }}>
                <Icon name="phone" style={[styles.icon, { color: '#ffffff', fontSize: 20, alignSelf: 'center', marginLeft: 10 }]} />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#023859', fontSize: 15, marginTop: 10, marginLeft: 20 }}>+(503) 7737-0098</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 45, marginLeft: 20 }}>
              <View style={{ flexDirection: 'row', width: 40, height: 40, backgroundColor: '#58CCA1' }}>
                <Icon name="web" style={[styles.icon, { color: '#ffffff', fontSize: 20, alignSelf: 'center', marginLeft: 10 }]} />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: '#023859', fontSize: 15, marginTop: 10, marginLeft: 20 }}>www.gerardo.com</Text>
              </View>
            </View>

          </View>
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContact: {
    flex: 1,
    flexDirection: 'row'
  },
  icon: {
    fontSize: 30
  },
  separator: {
    color: '#F47421',
    fontSize: 18,
    margin: 20
  },
  smallText: {
    color: '#B7C733',
    fontSize: 18,
    marginLeft: 20,
    marginBottom: 20
  },
  rows: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomColor: '#EAF8FD',
    borderBottomWidth: 1,
    paddingTop: 5
  }
});

export default ContactDetails;
