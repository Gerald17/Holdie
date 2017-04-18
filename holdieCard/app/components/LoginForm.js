/**
 * ./app/components/LoginForm.js
 * @author  Jonathan Palma <tanpalma04@gmail.com>
 */
import React, { Component, PropTypes } from 'react';
import { Alert, Image, StyleSheet, Text, View } from 'react-native';
import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';
import { Actions } from 'react-native-router-flux';

import Button from './Button';
import * as Validator from '../utils/validations/login';
import * as Api from '../utils/api';
import * as Db from '../utils/db';


const holdieLogo = require('./img/holdie-logo.png');
const eyeIcon = require('./img/eye-icon.png');


class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = { identifier: '', password: '', securePass: true };
  }


  static contextTypes = {
    routes: PropTypes.object.isRequired,
  }

  login() {
    let u = { identifier: this.state.identifier || '', password: this.state.password || '' };

    const validator = Validator.validateInput(u);

    if (validator.isValid) {
      Api.post('login/', Validator.toRemoteModel(u))
        .then((response) => {
          console.log('response', response);

          switch (response.status) {
            case 200:
              response.json()
                .then((responseJson) => {
                  console.log('ResponseJson: ', responseJson);
                  Db.saveObject('session', Validator.toLocalModel(u, responseJson.token))
                    .then((result) => {
                      Actions.cardform();
                    })
                    .done();
                })
                .catch((err) => {
                  console.log('Error: ', err);
                })
                .done();

              break;
            default:
              Alert.alert('Información', 'El usuario o la contraseña son incorrectos');
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

  forgotPass() {
    Alert.alert('Información', 'Restablecer contraseña');
  }

  render() {
    const { routes } = this.context;

    return (
      <View style={styles.container} >
        <Image
          source={holdieLogo}
          style={styles.logo}
        />

        <Kohana
          style={styles.input}
          label={'Usuario'}
          iconClass={MaterialsIcon}
          iconName={'person'}
          iconColor={'#848484'}
          labelStyle={{ color: '#6E6E6E', fontSize: 10 }}
          inputStyle={{ color: '#6E6E6E' }}
          keyboardType="email-address"
          onChangeText={(identifier) => this.setState({ identifier: identifier.trim() })}
        />

        <View style={{ flex: 1, flexDirection: 'row', height: 40, }}>
          <Kohana
            secureTextEntry={this.state.securePass}
            style={styles.inputShowPass}
            label={'Contraseña'}
            iconClass={MaterialsIcon}
            iconName={'lock'}
            iconColor={'#848484'}
            labelStyle={{ color: '#6E6E6E', fontSize: 10 }}
            inputStyle={{ color: '#6E6E6E' }}
            onChangeText={(password) => this.setState({ password: password.trim() })}
          />

          <Button onPress={() => this.setState({ securePass: !this.state.securePass })} >
            <View style={[styles.iconButton, styles.buttonPlus]}>
              {(this.state.securePass) ?
                <Image style={[styles.iconButton, styles.buttonShowPass]} source={eyeIcon} />
                :
                <Image style={[styles.iconButton, styles.buttonHidePass]} source={eyeIcon} />
              }
            </View>
          </Button>
        </View>

        <View>
          <Text style={styles.forgotPass} onPress={this.forgotPass} >
            ¿Olvidaste la Contraseña?
          </Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <Button onPress={routes.register}>
            <View style={styles.buttonReg}>
              <Text style={styles.btnText}>REGISTRARME</Text>
            </View>
          </Button>
          <Button onPress={() => { this.login(); }}>
            <View style={styles.button}>
              <Text style={styles.btnText}>INICIAR</Text>
            </View>
          </Button>
        </View>

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputShowPass: {
    backgroundColor: '#fff',
    marginLeft: 14,
    height: 40,
    maxHeight: 40,
    flex: 1
  },
  iconButton: {
    width: 40,
    height: 40,
  },
  buttonPlus: {
    marginRight: 14
  },
  buttonShowPass: {
    backgroundColor: '#E2E3E2',
  },
  buttonHidePass: {
    backgroundColor: '#b4b5b4'
  },
  logo: {
    marginTop: 80,
    width: 200,
    height: 100,
  },
  input: {
    backgroundColor: '#fff',
    marginBottom: 1,
    height: 50,
    maxHeight: 40,
    marginLeft: 14,
    marginRight: 14,
    paddingBottom: 13,
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
  buttonReg: {
    backgroundColor: '#F47421',
    borderColor: '#FAAC5D',
    borderWidth: 2,
    width: 158,
    height: 40,
    flexDirection: 'row',
    flex: 1,
    margin: 10
  },
  btnText: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    color: '#ffffff'
  },
  forgotPass: {
    marginBottom: 10,
    color: '#ffffff',
    flex: 1,
    fontSize: 14,
    alignSelf: 'center',
    textAlign: 'center',
  }
});

export default LoginForm;
