/**
 * ./app/components/CardHolder.js
 * @author  Jonathan Palma <tanpalma04@gmail.com>
 */
'use strict';
import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Makiko } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/MaterialIcons';

import CardBox from './CardBox';

class CardHolder extends Component {

  render() {
    return (
      <View style={styles.container}>

        <Makiko
          label={'Buscar por profesión'}
          iconClass={Icon}
          iconName={'search'}
          iconColor={'white'}
          inputStyle={{ color: '#db786d' }}
        />

        <ScrollView style={styles.scrollContainer}>

          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />
          <CardBox />

        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContainer: {
    marginTop: 15,
  },
});

export default CardHolder;
