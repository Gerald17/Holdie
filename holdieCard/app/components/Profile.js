/**
 * ./app/components/Profile.js
 * @author  Jonathan Palma <tanpalma04@gmail.com>
 */
import React, { Component } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CardBox from './CardBox';


import Button from './Button';
import { Actions } from 'react-native-router-flux';
import EditProfile from './EditProfile';

class Profile extends Component {
  render() {
    return (
      <View style={styles.container} >
        <View style={{flex: 1, alignSelf: 'stretch', height:70, backgroundColor: '#E2E3E2', alignItems: 'center', paddingTop: 23}}>
          <Text style={{fontSize:18}}>Mis tarjetas</Text>
          <Icon name="lock" style={styles.icon} />
          <Icon name="mode-edit" style={styles.iconEdit} />
        </View>
        <ScrollView style={styles.cardContainer}>
          <CardBox self={true} />
          <CardBox self={true} />
          <CardBox self={true} />
          <CardBox self={true} />
        </ScrollView>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardContainer: {
    flex: 1,
    alignSelf: 'stretch',
    height: 450
  },
  icon: {
    fontSize: 25,
    height: 30,
    width: 30,
    position: 'absolute',
    top: 25,
    right: 16,
    color: '#E36525'
  },
  iconEdit: {
    fontSize: 25,
    height: 30,
    width: 30,
    position: 'absolute',
    top: 25,
    right: 60,
    color: '#E36525',

  }
});
export default Profile;