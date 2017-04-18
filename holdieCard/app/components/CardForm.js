/**
 * ./app/components/CardForm.js
 */
'use strict';
import React, { Component, PropTypes } from 'react';
import { Alert, Image, Platform, StyleSheet, Text, View, ScrollView } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';
import CountryPicker from 'react-native-country-picker-modal';

import Button from './Button';
import * as Validator from '../utils/validations/cardform';
import * as db from '../utils/db';

const cameraImg = require('./img/camera.png');

class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cca2: 'SV',
      avatarSource: null,
      videoSource: null,
      tels: [''],
      name: '',
      surname: '',
      email: ''
    };
  }

  static contextTypes = {
    routes: PropTypes.object.isRequired,
  }

  save() {
    let c = {
      name: this.state.name || '',
      surname: this.state.surname || '',
      tels: this.state.tels || [],
      email: this.state.email || '',
      country: this.state.cca2 || '',
      profession: this.state.profession || '',
      jobtitle: this.state.jobtitle || '',
      company: this.state.company || '',
      address: this.state.address || ''
    };

    const validator = Validator.validateInput(c);

    if (validator.isValid) {
      console.log('Saving card: ', c);
      db.saveObject('tmpCard', c);
      Actions.cardcreation();
    } else {
      Alert.alert('Información', validator.errors[0]);
    }
  }


  _onPressOut() {
    let temp = '';
    let tempArray = this.state.tels;
    tempArray.push(temp);
    this.setState({
      tels: tempArray
    });
  }

  _removePhone(index) {
    if (index > 0) {
      let temp = this.state.tels;
      temp.splice(index, 1);
      this.setState({
        tels: temp
      });
    }
  }

  selectPhotoTapped() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source;

        if (Platform.OS === 'android') {
          source = { uri: response.uri, isStatic: true };
        } else {
          source = { uri: response.uri.replace('file://', ''), isStatic: true };
        }

        this.setState({
          avatarSource: source
        });
      }
    });
  }

  render() {
    let tels = this.state.tels.map((t, i) => {
      if (i > 0) {
        return (
          <View key={i} style={{ flex: 1, flexDirection: 'row', height: 40, marginBottom: 2 }}>
            <Kohana
              style={styles.inputPhone}
              label={'Teléfono ' + (i + 1)}
              iconClass={MaterialsIcon}
              iconName={'phone'}
              iconColor={'#848484'}
              labelStyle={{ color: '#6E6E6E', fontSize: 10 }}
              inputStyle={{ color: '#6E6E6E' }}
              keyboardType="phone-pad"
            />

            <Button onPress={() => this._removePhone(i)} >
              <View style={styles.buttonMinus}>
                <Text style={styles.buttonTextMinus}>-</Text>
              </View>
            </Button>

          </View>
        );
      } else {
        return (
          <View key={i} style={{ flex: 1, flexDirection: 'row', height: 40, marginBottom: 2 }}>
            <Kohana
              style={styles.inputPhone}
              label={'Teléfono ' + (i + 1) + ' *'}
              iconClass={MaterialsIcon}
              iconName={'phone'}
              iconColor={'#848484'}
              labelStyle={{ color: '#6E6E6E', fontSize: 10 }}
              inputStyle={{ color: '#6E6E6E' }}
              keyboardType="phone-pad"
            />
            <Button onPress={() => this._onPressOut()}>
              <View style={styles.buttonPlus}>
                <Text style={styles.buttonTextPlus}>+</Text>
              </View>
            </Button>

          </View>
        );
      }

    });

    return (
      <ScrollView>
        <View style={styles.container}>

          <Button
            borderRadius={true}
            onPress={this.selectPhotoTapped.bind(this)}
          >
            <View style={[styles.avatar, styles.avatarContainer, { marginBottom: 20 }]}>
              {this.state.avatarSource === null ?
                <Image style={[styles.avatar]} source={cameraImg} />
                :
                <Image style={styles.avatar} source={this.state.avatarSource} />
              }
            </View>
          </Button>

          <Kohana
            style={styles.input}
            label={'Nombres *'}
            iconClass={MaterialsIcon}
            iconName={'edit'}
            iconColor={'#848484'}
            labelStyle={{ color: '#6E6E6E', fontSize: 10 }}
            inputStyle={{ color: '#6E6E6E' }}
            autoCapitalize="words"
            onChangeText={(name) => this.setState({ name: name.trim() })}
          />

          <Kohana
            style={styles.input}
            label={'Apellidos *'}
            iconClass={MaterialsIcon}
            iconName={'edit'}
            iconColor={'#848484'}
            labelStyle={{ color: '#6E6E6E', fontSize: 10 }}
            inputStyle={{ color: '#6E6E6E' }}
            autoCapitalize="words"
            onChangeText={(surname) => this.setState({ surname: surname.trim() })}
          />

          <View style={{ height: 0, opacity: 0 }} >
            <CountryPicker
              ref={(countryPicker) => { this.countryPicker = countryPicker; }}
              onChange={(value) => this.setState({ country: value, cca2: value.cca2 })}
              cca2={this.state.cca2}
              translation="eng"
              closeable={true}
            />
          </View>

          <Button onPress={() => this.countryPicker.openModal()}>
            <View style={styles.picker}>
              {(this.state.country == null) ?
                <Text style={styles.btnTextPicker}>Seleccionar País *</Text>
                :
                <Text style={styles.btnTextPicker}>{this.state.country.name}</Text>
              }

            </View>
          </Button>

          {tels}

          <Kohana
            style={styles.input}
            label={'Profesión *'}
            iconClass={MaterialsIcon}
            iconName={'school'}
            iconColor={'#848484'}
            labelStyle={{ color: '#6E6E6E', fontSize: 10 }}
            inputStyle={{ color: '#6E6E6E' }}
            autoCapitalize="words"
            onChangeText={(profession) => this.setState({ profession: profession.trim() })}
          />

          <Kohana
            style={styles.input}
            label={'Rubro *'}
            iconClass={MaterialsIcon}
            iconName={'work'}
            iconColor={'#848484'}
            labelStyle={{ color: '#6E6E6E', fontSize: 10 }}
            inputStyle={{ color: '#6E6E6E' }}
            autoCapitalize="words"
            onChangeText={(jobtitle) => this.setState({ jobtitle: jobtitle.trim() })}
          />

          <Kohana
            style={styles.input}
            label={'Correo *'}
            iconClass={MaterialsIcon}
            iconName={'mail'}
            iconColor={'#848484'}
            labelStyle={{ color: '#6E6E6E', fontSize: 10 }}
            inputStyle={{ color: '#6E6E6E' }}
            keyboardType="email-address"
            onChangeText={(email) => this.setState({ email: email.trim() })}
          />

          <Kohana
            style={styles.input}
            label={'Empresa'}
            iconClass={MaterialsIcon}
            iconName={'location-city'}
            iconColor={'#848484'}
            labelStyle={{ color: '#6E6E6E', fontSize: 10 }}
            inputStyle={{ color: '#6E6E6E' }}
            autoCapitalize="words"
            onChangeText={(company) => this.setState({ company: company.trim() })}
          />

          <Kohana
            style={styles.input}
            label={'Dirección'}
            iconClass={MaterialsIcon}
            iconName={'place'}
            iconColor={'#848484'}
            labelStyle={{ color: '#6E6E6E', fontSize: 10 }}
            inputStyle={{ color: '#6E6E6E' }}
            autoCapitalize="words"
            onChangeText={(address) => this.setState({ address: address.trim() })}
          />

          <Button onPress={() => { this.save(); }}>
            <View style={styles.button}>
              <Text style={styles.btnText}>INICIAR</Text>
            </View>
          </Button>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    backgroundColor: '#B6C735',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 1,
    height: 50,
    maxHeight: 40,
    marginLeft: 14,
    marginRight: 14,
    paddingBottom: 13
  },
  picker: {
    backgroundColor: '#fff',
    flex: 1,
    marginTop: 1,
    marginBottom: 1,
    marginLeft: 14,
    marginRight: 14,
    height: 40,
    flexDirection: 'row'
  },
  btnTextPicker: {
    color: 'gray',
    flex: 1,
    alignSelf: 'center',
    textAlign: 'left',
    paddingLeft: 15,
    fontWeight: 'bold',
    fontSize: 10,
  },
  inputPhone: {
    backgroundColor: '#fff',
    marginLeft: 14,
    height: 40,
    maxHeight: 40,
    flex: 1
  },
  button: {
    backgroundColor: '#3db188',
    borderColor: '#bbded0',
    borderWidth: 2,
    width: 158,
    height: 40,
    flexDirection: 'row',
    margin: 10
  },
  btnText: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
  },
  buttonPlus: {
    width: 40,
    height: 40,
    marginRight: 14
  },
  buttonTextPlus: {
    backgroundColor: 'skyblue',
    fontSize: 30,
    textAlign: 'center',
    color: 'white'
  },
  buttonTextMinus: {
    backgroundColor: 'red',
    fontSize: 40,
    textAlign: 'center',
    color: 'white',
    paddingTop: -10
  },
  buttonMinus: {
    width: 40,
    height: 40,
    marginRight: 14
  },
  avatarContainer: {
    borderColor: '#9B9B9B',
    justifyContent: 'center',
    alignItems: 'center'
  },
  avatar: {
    width: 100,
    height: 100,
    borderWidth: 0
  }
});

export default CardForm;
