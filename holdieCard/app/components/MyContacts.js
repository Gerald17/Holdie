/**
 * ./app/components/MyContacts.js
 * @author  Jonathan Palma <tanpalma04@gmail.com>
 */
'use strict';
import React, { Component } from 'react';
import { Alert, ListView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SegmentedControls } from 'react-native-radio-buttons';
import { Makiko } from 'react-native-textinput-effects';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';

import Button from './Button';

class MyContacts extends Component {
  constructor(props, context) {
    super(props, context);

    const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
    this.state = { selectedSegment: 'Nombre', dataSource: ds };
  }

  askDelete() {
    Alert.alert(
      'Eliminar',
      '¿Está seguro que desea eliminar esta tarjeta?',
      [
        { text: 'Sí', onPress: () => this.infoDelete() },
        { text: 'No', onPress: () => console.log('Cancel Pressed'), style: 'cancel' }
      ]
    );
  }

  infoDelete() {
    Alert.alert(
      'Eliminar',
      'La tarjeta ha sido eliminada satisfactoriamente',
      [
        { text: 'OK', onPress: () => console.log('OK Pressed') }
      ]
    );
  }

  renderSegmentControl() {
    const options = [
      'Nombre',
      'Profesión',
    ];

    function setSelectedOption(selectedSegment) {
      this.setState({
        selectedSegment
      });
    }

    return (
      <View style={{ padding: 10, backgroundColor: 'white' }}>
        <SegmentedControls
          options={options}
          onSelection={setSelectedOption.bind(this)}
          selectedOption={this.state.selectedSegment}
          selectedBackgroundColor="#4AC087"
          tint="#4AC087"
        />
      </View>);
  }

  render() {
    return (
      <View style={styles.container}>

        <Makiko
          label={'Buscar'}
          iconClass={Icon}
          iconName={'search'}
          iconColor={'white'}
          inputStyle={{ color: '#db786d' }}
        />

        {this.renderSegmentControl()}

        <ScrollView>
          {(this.state.selectedSegment === 'Nombre') ?
            <Text style={styles.separator}>A</Text>
            :
            <Text style={styles.separator}>Diseño gráfico</Text>
          }

          <View style={styles.rowContact}>
            <Button>
              <View style={styles.rows}>
                <Text style={styles.text}> Nombre Apellido</Text>
                <Text style={styles.smallText}>Detalle del contacto</Text>
              </View>
            </Button>
            <View style={styles.controlContainer}>
              <Button onPress={Actions.details} borderRadius={true}>
                <View style={styles.controlBox}>
                  <Icon name="input" style={styles.icon} />
                </View>
              </Button>
            </View>
          </View>

          <View style={styles.rowContact}>
            <Button>
              <View style={styles.rows}>
                <Text style={styles.text}> Nombre Apellido</Text>
                <Text style={styles.smallText}>Detalle del contacto</Text>
              </View>
            </Button>
            <View style={styles.controlContainer}>
              <Button onPress={Actions.details} borderRadius={true}>
                <View style={styles.controlBox}>
                  <Icon name="input" style={styles.icon} />
                </View>
              </Button>
            </View>
          </View>

          {(this.state.selectedSegment === 'Nombre') ?
            <Text style={styles.separator}>B</Text>
            :
            <Text style={styles.separator}>Informática</Text>
          }


          <View style={styles.rowContact}>
            <Button>
              <View style={styles.rows}>
                <Text style={styles.text}> Nombre Apellido</Text>
                <Text style={styles.smallText}>Detalle del contacto</Text>
              </View>
            </Button>
            <View style={styles.controlContainer}>
              <Button onPress={Actions.details} borderRadius={true}>
                <View style={styles.controlBox}>
                  <Icon name="input" style={styles.icon} />
                </View>
              </Button>
            </View>
          </View>



          <View style={styles.rowContact}>
            <Button>
              <View style={styles.rows}>
                <Text style={styles.text}> Nombre Apellido</Text>
                <Text style={styles.smallText}>Detalle del contacto</Text>
              </View>
            </Button>
            <View style={styles.controlContainer}>
              <Button onPress={Actions.details} borderRadius={true}>
                <View style={styles.controlBox}>
                  <Icon name="input" style={styles.icon} />
                </View>
              </Button>
            </View>
          </View>

          {(this.state.selectedSegment === 'Nombre') ?
            <Text style={styles.separator}>C</Text>
            :
            <Text style={styles.separator}>Transporte</Text>
          }

          <View style={styles.rowContact}>
            <Button>
              <View style={styles.rows}>
                <Text style={styles.text}> Nombre Apellido</Text>
                <Text style={styles.smallText}>Detalle del contacto</Text>
              </View>
            </Button>
            <View style={styles.controlContainer}>
              <Button onPress={Actions.details} borderRadius={true}>
                <View style={styles.controlBox}>
                  <Icon name="input" style={styles.icon} />
                </View>
              </Button>
            </View>
          </View>

          <View style={styles.rowContact}>
            <Button>
              <View style={styles.rows}>
                <Text style={styles.text}> Nombre Apellido</Text>
                <Text style={styles.smallText}>Detalle del contacto</Text>
              </View>
            </Button>
            <View style={styles.controlContainer}>
              <Button onPress={Actions.details} borderRadius={true}>
                <View style={styles.controlBox}>
                  <Icon name="input" style={styles.icon} />
                </View>
              </Button>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rowContact: {
    flex: 1,
    flexDirection: 'row',
    height: 45
  },
  controlContainer: {
    width: 40,
    borderBottomColor: '#EAF8FD',
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 45,
    paddingTop: 8
  },
  controlBox: {
    flex: 1,
    flexDirection: 'row'
  },
  icon: {
    fontSize: 20
  },
  text: {
    fontSize: 14,
    color: 'black',
    marginLeft: 15
  },
  separator: {
    color: '#F47421',
    fontSize: 18,
    margin: 20
  },
  smallText: {
    color: '#B7C733',
    fontSize: 10,
    marginLeft: 20
  },
  rows: {
    flex: 1,
    backgroundColor: '#fff',
    borderBottomColor: '#EAF8FD',
    borderBottomWidth: 1,
    height: 45,
    paddingTop: 5
  }
});

export default MyContacts;
