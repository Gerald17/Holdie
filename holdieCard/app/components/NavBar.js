/**
 * ./app/components/NavBar.js
 * @author  Jonathan Palma <tanpalma04@gmail.com>
 */
'use strict';
import React, { Component, PropTypes } from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Share from 'react-native-share';

import Button from './Button';

const window = Dimensions.get('window');
const logo = require('./img/holdie-icon-bar.png');

class NavBar extends Component {
  static contextTypes = {
    routes: PropTypes.object.isRequired,
  }

  render() {
    const { routes } = this.context;

    const shareOptions = {
      title: 'Holdie Card',
      message: 'Quiero compartir mi tarjeta con tigo',
      url: 'http://holdie-card.com',
      subject: 'Holdie Card'
    };

    return (
      <View style={styles.nav}>


        {(this.props.iconTitle) ?
          <Icon name={this.props.iconTitle} style={styles.icon} />
          :
          null
        }

        {(this.props.title) ?
          <Text style={styles.title}>{this.props.title}</Text>
          :
          null
        }

        {(this.props.logo) ?
          <Image style={styles.img} source={logo} />
          :
          null
        }

        <View style={styles.rightAlign}>
          {(this.props.icon) ?
            <Button onPress={routes.pop}  rippleColor="aqua">
              <View style={{ height: 56, width: 56 }}>
                <Icon name={this.props.icon} style={styles.icon} />
              </View>
            </Button>
            : null
          }

          {(this.props.share) ?
            <Button onPress={() => { Share.open(shareOptions); } } rippleColor="aqua">
              <View style={{ height: 56, width: 56}}>
                <Icon name="share" style={styles.icon} />
              </View>
            </Button>
            : null
          }
        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  nav: {
    height: 56,
    width: window.width,
    flexDirection: 'row',
    backgroundColor: '#4AC087',
    marginBottom: -25
  },
  title: {
    color: 'white',
    fontSize: 20,
    marginLeft: 72,
    alignSelf: 'center',
  },
  icon: {
    fontSize: 25,
    height: 30,
    width: 30,
    position: 'absolute',
    top: 13,
    left: 16,
    color: 'white',
  },
  rightAlign: {
    position: 'absolute',
    right: 1,
  },
  img: {
    height: 36,
    width: 114,
    marginLeft: 10,
    top: 10,
  },
});

export default NavBar;
