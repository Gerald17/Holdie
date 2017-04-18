/**
 * ./app/components/Register.js
 */
'use strict';
import React, { Component, PropTypes } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';
import CheckBox from 'react-native-check-box';
import Modal from 'react-native-modalbox';

import Terms from './Terms';
import Button from './Button';
import * as Validator from '../utils/validations/register';
import * as Api from '../utils/api';

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      isOpen: false,
      name: '',
      surname: '',
      email: '',
      password: '',
      passwordConfirmation: ''
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

        <Kohana
          secureTextEntry={true}
          style={styles.input}
          label={'Contraseña'}
          iconClass={MaterialsIcon}
          iconName={'lock'}
          iconColor={'#848484'}
          labelStyle={{ color: '#6E6E6E', fontSize: 10 }}
          inputStyle={{ color: '#6E6E6E' }}
          onChangeText={(password) => this.setState({ password: password.trim() })}
        />

        <Kohana
          secureTextEntry={true}
          style={styles.input}
          label={'Confirmar Contraseña'}
          iconClass={MaterialsIcon}
          iconName={'lock'}
          iconColor={'#848484'}
          labelStyle={{ color: '#6E6E6E', fontSize: 10 }}
          inputStyle={{ color: '#6E6E6E' }}
          onChangeText={(passConfirmation) => this.setState({ passConfirmation: passConfirmation.trim() })}
        />

        <View>
          <CheckBox
            style={{ flex: 1, padding: 10 }}
            onClick={() => this.check()}
            isChecked={this.state.checked}
            rightText="Acepto "
          />

          <Text style={{ flex: 1, color: 'white', alignSelf: 'center', marginTop: 10, marginBottom: 10 }} onPress={() => this.openModal()}>
            LEER TÉRMINOS Y CONDICIONES
          </Text>

        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>

          <Button onPress={routes.pop}>
            <View style={styles.buttonCancel}>
              <Text style={styles.btnText}>CANCELAR</Text>
            </View>
          </Button>
          <Button onPress={() => { this.save(); }} disabled={!this.state.checked} >
            {(this.state.checked) ?
              <View style={styles.button}>
                <Text style={styles.btnText}>GUARDAR</Text>
              </View>
              :
              <View style={styles.buttonCancel}>
                <Text style={styles.btnText}>GUARDAR</Text>
              </View>
            }

          </Button>
        </View>

        <Modal
          isOpen={this.state.isOpen}
          onClosed={this.closeModal.bind(this)}
          style={[styles.modal, styles.modal3]}
          position="center"
          swipeArea={50}
        >
          <Terms />
        </Modal>

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
  buttonCancel: {
    backgroundColor: '#B1B2B6',
    borderColor: '#E2E3E2',
    borderWidth: 2,
    width: 158,
    height: 40,
    flexDirection: 'row',
    flex: 1,
    margin: 10
  },
  btnText: {
    flex: 1,
    textAlign: 'center',
    alignSelf: 'center',
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal3: {
    height: 500,
    width: 320
  },
});

export default RegisterForm;
