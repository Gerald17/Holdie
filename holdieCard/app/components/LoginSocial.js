/**
 * ./app/components/LoginSocial.js
 * @author  Jonathan Palma <tanpalma04@gmail.com>
 */
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FBLogin, FBLoginManager } from 'react-native-facebook-login';
import { GoogleSignin } from 'react-native-google-signin';
import Icon from 'react-native-vector-icons/FontAwesome';

import Button from './Button';
//import Db from '../utils/db';

class LoginSocial extends Component {

  componentDidMount() {
    this._setupGoogleSignin();
  }

  async _setupGoogleSignin() {
    try {
      await GoogleSignin.hasPlayServices({ autoResolve: true });
      await GoogleSignin.configure({
        scopes: ['email', 'profile'],
        webClientId: '626838632924-il1qeq5i4u9oj5h89ifbot7g2elbqr0h.apps.googleusercontent.com',
        offlineAccess: true
      });

      const user = await GoogleSignin.currentUserAsync();
      console.log(user);
      this.setState({ user });
    }
    catch (err) {
      console.log('Play services error', err.code, err.message);
    }
  }

  _gsignIn() {
    GoogleSignin.signIn()
      .then((user) => {
        console.log(user);
        this.setState({ user });
      })
      .catch((err) => {
        console.log('WRONG SIGNIN', err);
      })
      .done();
  }

  _gsignOut() {
    GoogleSignin.revokeAccess().then(() => GoogleSignin.signOut()).then(() => {
      this.setState({ user: null });
    })
      .done();
  }

  render() {
    const self = this;
    return (
      <View>
        <View>
          <Text style={styles.loginText}>o inicia sesion con</Text>
        </View>

        <FBLogin
          ref={(fbLogin) => { this.fbLogin = fbLogin; }}
          permissions={['email', 'user_friends']}
          loginBehavior={FBLoginManager.LoginBehaviors.Native}
          onLogin={function (data) {
            console.log('Logged in!');
            //Db.saveObject('session', data);
            console.log(data);
            self.setState({ user: data.credentials });
          }}
          onLogout={function () {
            console.log('Logged out.');
            //Db.delete('session');
            self.setState({ user: null });
          }}
          onLoginFound={function (data) {
            console.log('Existing login found.');
            console.log(data);
            self.setState({ user: data.credentials });
          }}
          onLoginNotFound={function () {
            console.log('No user logged in.');
            self.setState({ user: null });
          }}
          onError={function (data) {
            console.log('ERROR');
            console.log(data);
          }}
          onCancel={function () {
            console.log('User cancelled.');
          }}
          onPermissionsMissing={function (data) {
            console.log('Check permissions!');
            console.log(data);
          }}
        />

        <Button onPress={() => { this._gsignIn(); }} >
          <View iconName={'lock'} style={styles.buttonGmail}>
            <Icon name="google" color="#fff" style={styles.iconGmail} />
            <Text style={styles.btnTextGmail}>Login with Gmail</Text>
          </View>
        </Button>
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
  buttonGmail: {
    backgroundColor: '#DC4B38',
    width: 180,
    marginTop: 10,
    marginBottom: 20,
    height: 40,
    flexDirection: 'row',
  },
  iconGmail: {
    top: 12,
    left: 12,
    fontSize: 15,
  },
  btnTextGmail: {
    color: '#ffffff',
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
  }
});

export default LoginSocial;
