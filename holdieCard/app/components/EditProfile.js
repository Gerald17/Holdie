/**
 * ./app/components/EditProfile.js
 */
'use strict';
import React, { Component, PropTypes } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';



import * as Validator from '../utils/validations/register';
import * as Api from '../utils/api';

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      isOpen: false,
      name: '',
      surname: '',
      email: ''
    };
  }

  static contextTypes = {
    routes: PropTypes.object.isRequired,
  }

  openModal() {
    this.setState({ isOpen: true });
  }

  closeModal() {
    this.setState({ isOpen: false });
  }

  save() {
    let u = {
      name: this.state.name || '',
      surname: this.state.surname || '',
      email: this.state.email || '',
      password: this.state.password || '',
      passwordConfirmation: this.state.passConfirmation || ''
    };

    const validator = Validator.validateInput(u);

    if (validator.isValid) {
      Api.post('usuarios/', Validator.toRemoteModel(u))
        .then((response) => {
          console.log('response', response);

          switch (response.status) {
            case 201:
              Alert.alert('Información', 'Usuario registrado correctamente');
              Actions.pop();
              break;
            case 409:
              Alert.alert('Información', 'El correo ingresado ya ha sido registrado');
              break;
            default:
              Alert.alert('Información', 'Error al intentar registrar el usuario');
              break;
          }

        })
        .catch((err) => {
          console.log('Error ', err);
        })
        .done();

    } else {
      Alert.alert('Información', validator.errors[0]);
    }

  }

  check() {
    this.setState({ checked: !this.state.checked });
  }

  render() {
    const { routes } = this.context;

    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>

        <View>
          <Text style={styles.loginText}>Ingresa tus datos para registrarte</Text>
        </View>

        <Kohana
          style={styles.input}
          label={'Nombre'}
          iconClass={MaterialsIcon}
          iconName={'person'}
          iconColor={'#848484'}
          labelStyle={{ color: '#6E6E6E', fontSize: 10 }}
          inputStyle={{ color: '#6E6E6E' }}
          autoCapitalize="words"
          onChangeText={(name) => this.setState({ name: name.trim() })}
        />

        <Kohana
          style={styles.input}
          label={'Apellidos'}
          iconClass={MaterialsIcon}
          iconName={'person'}
          iconColor={'#848484'}
          labelStyle={{ color: '#6E6E6E', fontSize: 10 }}
          inputStyle={{ color: '#6E6E6E' }}
          autoCapitalize="words"
          onChangeText={(surname) => this.setState({ surname: surname.trim() })}
        />

        <Kohana
          style={styles.input}
          label={'Correo'}
          iconClass={MaterialsIcon}
          iconName={'mail'}
          iconColor={'#848484'}
          labelStyle={{ color: '#6E6E6E', fontSize: 10 }}
          inputStyle={{ color: '#6E6E6E' }}
          keyboardType="email-address"
          onChangeText={(email) => this.setState({ email: email.trim() })}
        />


      </View>
    );
  }
}

const styles = StyleSheet.create({
  loginText: {
    marginBottom: 10,
    color: '#ffffff',
    marginTop: 60,
    flex: 1,
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 1,
    height: 50,
    maxHeight: 40,
    marginLeft: 14,
    marginRight: 14,
    paddingBottom: 13
  }
});

export default EditProfile;
