/**
 * ./app/components/Main.js
 */
'use strict';
import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import NavBar from './NavBar';
import MainTabBar from './MainTabBar';

import MyContacts from './MyContacts';
import CardMenu from './CardMenu';
import CardHolder from './CardHolder';
import Profile from './Profile';
import Settings from './Settings';

const viewIcons = ['contacts', 'camera-enhance', 'chrome-reader-mode', 'account-box'];
const viewTitles = ['My holdie', 'Crear tarjetas', 'Tarjetero', 'Mi perfil'];

class Main extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { currentIndex: 0 }
  }

  render() {

    return (
      <View style={styles.container}>
        <NavBar
          share={true}
          iconTitle={viewIcons[this.state.currentIndex]}
          title={viewTitles[this.state.currentIndex]} />

        <ScrollableTabView
          style={{ marginTop: 20, }}
          initialPage={0}
          renderTabBar={() => <MainTabBar />}
          onChangeTab={(index) => { this.setState({ currentIndex: index.i }); } }
          tabBarPosition="bottom"
          tabBarActiveTextColor="#4AC087"
          tabBarUnderlineColor="#4AC087"
        >

          <MyContacts tabLabel={viewIcons[0]} />
          <CardMenu tabLabel={viewIcons[1]} />
          <CardHolder tabLabel={viewIcons[2]} />
          <Profile tabLabel={viewIcons[3]} />

        </ScrollableTabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
  }
});

export default Main;
