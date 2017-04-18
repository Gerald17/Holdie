/**
 * ./app/components/CardBox.js
 * @author  Jonathan Palma <tanpalma04@gmail.com>
 */
import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { email, phonecall } from 'react-native-communications';
import Share from 'react-native-share';
import { Actions } from 'react-native-router-flux';

import Button from './Button';

class CardBox extends Component {

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

  infoAddedCard() {
    Alert.alert(
      'Contactos',
      'La tarjeta ha sido agregada satisfactoriamente',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ]
    );
  }

  render() {
    const shareOptions = {
      title: 'Holdie Card',
      message: 'Quiero compartir mi tarjeta con tigo',
      url: 'http://holdie-card.com',
      subject: 'Holdie Card'
    };

    return (
      <View style={styles.container}>

        <Image
          source={require('./img/cardbggray.png')}
          style={styles.containerbg}>
          <Text style={{ fontSize: 21 }}>Gerardo Alexander Estrada</Text>
          <Text style={{ color: 'gray' }}>
            <Icon name="work" style={{ fontSize: 15, color: '#E36525' }} /> Profesion
            </Text>
        </Image>

        {(this.props.self) ?
          <View style={styles.controlContainer}>
            <Button borderRadius={true}>
              <View style={styles.controlBox}>
                <Icon name="edit" style={styles.icon} />
              </View>
            </Button>
            <Button onPress={() => this.askDelete()} borderRadius={true}>
              <View style={styles.controlBox}>
                <Icon name="delete" style={styles.icon} />
              </View>
            </Button>
            <Button onPress={() => { Share.open(shareOptions); }} borderRadius={true}>
              <View style={styles.controlBox}>
                <Icon name="share" style={styles.icon} />
              </View>
            </Button>
          </View>
          :
          <View style={styles.controlContainer}>
            <Button onPress={() => this.infoAddedCard()} borderRadius={true}>
              <View style={styles.controlBox}>
                <Icon name="person-add" style={styles.icon} />
              </View>
            </Button>
            <Button onPress={() => email(['gerardo.estrada.dg@gmail.com'], null, null, 'Contacto - Holdie Card', 'Este es un correo enviado desde holdie')} borderRadius={true}>
              <View style={styles.controlBox}>
                <Icon name="email" style={styles.icon} />
              </View>
            </Button>
            <Button onPress={() => phonecall('12345678', false)} borderRadius={true}>
              <View style={styles.controlBox}>
                <Icon name="call" style={styles.icon} />
              </View>
            </Button>
            <Button onPress={Actions.details} borderRadius={true}>
              <View style={styles.controlBox}>
                <Icon name="input" style={styles.icon} />
              </View>
            </Button>
          </View>
        }

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerbg: {
    flex: 1,
    width: undefined,
    height: 150,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'stretch',
    margin: 20,
    marginBottom: 0
  },
  controlContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'stretch',
    alignItems: 'center',
    height: 60,
    margin: 20,
    marginTop: 0,
    marginBottom: 0,
  },
  controlBox: {
    flex: 1,
    flexDirection: 'row',
    height: 56,
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    fontSize: 25,
    height: 30,
    width: 30,
    alignSelf: 'center',
    color: '#757575',
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
  backgroundCard: {
    flex: 1,
    resizeMode: 'cover',
    height: null,
    width: null
  },
});

export default CardBox;
