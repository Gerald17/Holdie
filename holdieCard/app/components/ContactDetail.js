/**
 * ./app/components/MyContacts.js
 * @author  Jonathan Palma <tanpalma04@gmail.com>
 */
'use strict';
import React, { Component } from 'react';
import { Alert, ListView, StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import NavBar from './NavBar';


const logo = require('./img/camera.png');

class ContactDetail extends Component {
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

        <NavBar icon="navigate-before" logo={true} />

        <View style={{ height: 70, backgroundColor: '#E2E3E2', position: 'relative', marginTop: 25 }}>

          {(this.state.selectedSegment === 'Nombre') ?
            <Text style={styles.separator}>CATEGORIA</Text>
            :
            <Text style={styles.separator}>Diseño gráfico</Text>
          }

          <Icon name="share" style={{ color: '#E36525', fontSize: 30, position: 'absolute', top: 20, right: 30 }} />
          <Icon name="delete" style={{ color: '#E36525', fontSize: 30, position: 'absolute', top: 20, right: 80 }} />

        </View>

        <View style={styles.rowContact}>


          <View style={styles.content}>


            <Text style={{ fontSize: 22, marginTop: 10, color: '#58CCA1' }}>Gerardo Alexander</Text>
            <Text style={{ fontSize: 22, color: '#58CCA1', marginBottom: 10 }}>Orellana Estrada</Text>
            <Text style={{ fontSize: 14, color: '#383535', marginBottom: 20 }}><Icon name="work" style={[styles.icon, { color: '#E36525', fontSize: 15, marginLeft: 5, marginTop: 3 }]} /> Diseñador Gráfico</Text>


            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row', width: 20, height: 20, backgroundColor: '#58CCA1' }}>
                <Icon name="phone" style={[styles.icon, { color: '#ffffff', fontSize: 13, alignSelf: 'center', marginLeft: 5 }]} />
              </View>
              <View style={{ flexDirection: 'row', height: 20 }}>
                <Text style={{ color: '#023859', fontSize: 15, marginLeft: 20 }}>22337722</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row', width: 20, height: 20, backgroundColor: '#58CCA1' }}>
                <Icon name="mail" style={[styles.icon, { color: '#ffffff', fontSize: 13, alignSelf: 'center', marginLeft: 5 }]} />
              </View>
              <View style={{ flexDirection: 'row', height: 20 }}>
                <Text style={{ color: '#023859', fontSize: 15, marginLeft: 20 }}>gerardo.estrada.dg@gmail.com</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row', width: 20, height: 20, backgroundColor: '#58CCA1' }}>
                <Icon name="web" style={[styles.icon, { color: '#ffffff', fontSize: 13, alignSelf: 'center', marginLeft: 5 }]} />
              </View>
              <View style={{ flexDirection: 'row', height: 20 }}>
                <Text style={{ color: '#023859', fontSize: 15, marginLeft: 20 }}>pixelwand.com</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row', width: 20, height: 20, backgroundColor: '#58CCA1' }}>
                <Icon name="domain" style={[styles.icon, { color: '#ffffff', fontSize: 13, alignSelf: 'center', marginLeft: 5 }]} />
              </View>
              <View style={{ flexDirection: 'row', height: 20 }}>
                <Text style={{ color: '#023859', fontSize: 15, marginLeft: 20 }}>prueba</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row' }}>
              <View style={{ flexDirection: 'row', width: 20, height: 20, backgroundColor: '#58CCA1' }}>
                <Icon name="place" style={[styles.icon, { color: '#ffffff', fontSize: 13, alignSelf: 'center', marginLeft: 5 }]} />
              </View>
              <View style={{ flexDirection: 'row', height: 20 }}>
                <Text style={{ color: '#023859', fontSize: 15, marginLeft: 20 }}>prueba</Text>
              </View>
            </View>

            <View style={{ flex: 1, flexDirection: 'row', marginBottom: 70 }}>
              <View style={{ flexDirection: 'row', width: 20, height: 20, backgroundColor: '#58CCA1' }}>
                <Icon name="language" style={[styles.icon, { color: '#ffffff', fontSize: 13, alignSelf: 'center', marginLeft: 5 }]} />
              </View>
              <View style={{ flexDirection: 'row', height: 20 }}>
                <Text style={{ color: '#023859', fontSize: 15, marginLeft: 20 }}>prueba</Text>
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
    flexDirection: 'row',
    paddingLeft: 30,
    position: 'relative'
  },
  icon: {
    fontSize: 30
  },
  separator: {
    color: '#F47421',
    fontSize: 18,
    margin: 20
  }
});

export default ContactDetail;
