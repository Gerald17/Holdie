/**
 * ./app/components/Button.js
 * @author  Jonathan Palma <tanpalma04@gmail.com>
 */
'use strict';
import React, { Component } from 'react';
import { TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

const rippleColors = { aqua: '#A7FFEB' };

class Button extends Component {
  render() {
    if (Platform.OS !== 'android') {
      return (
        <TouchableOpacity
          onPress={this.props.onPress}
        >
          {this.props.children}
        </TouchableOpacity>
      );
    } else {
      if (this.props.rippleColor) {
        return (
          <TouchableNativeFeedback
            onPress={this.props.onPress}
            background={TouchableNativeFeedback.Ripple(rippleColors[this.props.rippleColor], true)}
            disabled={this.props.disabled}
          >
            {this.props.children}
          </TouchableNativeFeedback>
        );
      } else {
        return (
          <TouchableNativeFeedback
            onPress={this.props.onPress}
            background={TouchableNativeFeedback.Ripple(null, (this.props.borderRadius || false))}
            disabled={this.props.disabled}
          >
            {this.props.children}
          </TouchableNativeFeedback>
        );
      }

    }
  }
}

export default Button;

