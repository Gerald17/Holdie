import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

import MaterialsIcon from 'react-native-vector-icons/MaterialIcons';
import { Kohana } from 'react-native-textinput-effects';

 const { width } = Dimensions.get('window');

const TextField = ({ label, icon, secure, capitalize, keyboard, error }) => {
  const err = (error) ? <Text>{error}</Text> : null;
  return (
    <View>
      <Kohana
        style={styles.input}
        label={label}
        iconClass={MaterialsIcon}
        iconName={icon}
        iconColor={'#848484'}
        labelStyle={{ color: '#6E6E6E' }}
        inputStyle={{ color: '#6E6E6E', height: 40 }}
        autoCapitalize={capitalize}
        secureTextEntry={secure}
        keyboardType={keyboard}
        />
      {err}
    </View>
  );
};

TextField.propTypes = {
  label: React.PropTypes.string.isRequired,
  icon: React.PropTypes.string.isRequired,
  secure: React.PropTypes.bool.isRequired,
  capitalize: React.PropTypes.string.isRequired,
  keyboard: React.PropTypes.string.isRequired,
  error: React.PropTypes.string
};

TextField.defaultProps = {
  secure: false,
  capitalize: 'none',
  keyboard: 'default'
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#fff',
    marginBottom: 3,
    height: 40,
    maxHeight: 40,
    marginLeft: 14,
    marginRight: 14,
    width: width - 28
  }
});

export default TextField;