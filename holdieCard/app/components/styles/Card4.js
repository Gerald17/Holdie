import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Card = ({ logo, name, surname, profession, tel, email }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>

      <View style={{ width: 360, backgroundColor: '#434144', height: 200, position: 'relative' }}>
        <View style={styles.barTop} />
        <Image style={[styles.cardLogo, { marginTop: 50 }]} source={logo} />
        <View style={styles.barBottom} />
      </View>

      <View style={styles.content}>


        <Text style={{ fontSize: 18, marginTop: 10, color: '#58CCA1' }}>{name}</Text>
        <Text style={{ fontSize: 18, color: '#58CCA1' }}>{surname}</Text>
        <Text style={{ fontSize: 14, color: '#383535', marginBottom: 20 }}>{profession}</Text>


        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row', width: 20, height: 20, backgroundColor: '#58CCA1' }}>
            <Icon name="phone" style={[styles.icon, { color: '#ffffff', fontSize: 13, alignSelf: 'center', marginLeft: 5 }]} />
          </View>
          <View style={{ flexDirection: 'row', height: 20 }}>
            <Text style={{ color: '#023859', fontSize: 15, marginLeft: 20 }}>{tel[0]} | {tel[1]}</Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row', width: 20, height: 20, backgroundColor: '#58CCA1' }}>
            <Icon name="mail" style={[styles.icon, { color: '#ffffff', fontSize: 13, alignSelf: 'center', marginLeft: 5 }]} />
          </View>
          <View style={{ flexDirection: 'row', height: 20 }}>
            <Text style={{ color: '#023859', fontSize: 15, marginLeft: 20 }}>{email}</Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row', width: 20, height: 20, backgroundColor: '#58CCA1' }}>
            <Icon name="web" style={[styles.icon, { color: '#ffffff', fontSize: 13, alignSelf: 'center', marginLeft: 5 }]} />
          </View>
          <View style={{ flexDirection: 'row', height: 20 }}>
            <Text style={{ color: '#023859', fontSize: 15, marginLeft: 20 }}></Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row', width: 20, height: 20, backgroundColor: '#58CCA1' }}>
            <Icon name="domain" style={[styles.icon, { color: '#ffffff', fontSize: 13, alignSelf: 'center', marginLeft: 5 }]} />
          </View>
          <View style={{ flexDirection: 'row', height: 20 }}>
            <Text style={{ color: '#023859', fontSize: 15, marginLeft: 20 }}>prueba</Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row' }}>
          <View style={{ flexDirection: 'row', width: 20, height: 20, backgroundColor: '#58CCA1' }}>
            <Icon name="place" style={[styles.icon, { color: '#ffffff', fontSize: 13, alignSelf: 'center', marginLeft: 5 }]} />
          </View>
          <View style={{ flexDirection: 'row', height: 20 }}>
            <Text style={{ color: '#023859', fontSize: 15, marginLeft: 20 }}>prueba</Text>
          </View>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', marginBottom: 70 }}>
          <View style={{ flexDirection: 'row', width: 20, height: 20, backgroundColor: '#58CCA1' }}>
            <Icon name="language" style={[styles.icon, { color: '#ffffff', fontSize: 13, alignSelf: 'center', marginLeft: 5 }]} />
          </View>
          <View style={{ flexDirection: 'row', height: 20 }}>
            <Text style={{ color: '#023859', fontSize: 15, marginLeft: 20 }}>prueba</Text>
          </View>
        </View>

      </View>
    </View>
  );
};


Card.propTypes = {
  logo: React.PropTypes.number.isRequired,
  name: React.PropTypes.string.isRequired,
  surname: React.PropTypes.string.isRequired,
  profession: React.PropTypes.string.isRequired,
  tel: React.PropTypes.array.isRequired,
  email: React.PropTypes.string.isRequired
};

const styles = StyleSheet.create({
  cardLogo: {
    width: 100,
    height: 100,
    alignSelf: 'center'
  },
  barBottom: {
    backgroundColor: '#58CCA1',
    width: 300,
    height: 20,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
    right: 0
  },
  barTop: {
    backgroundColor: '#ABD951',
    width: 300,
    height: 20,
    alignSelf: 'center',
    position: 'absolute',
    top: 0,
    left: 0
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#FBFBFB',
    paddingLeft: 30,
    borderLeftWidth: 10,
    borderColor: '#58CCA1'

  }
});

export default Card;
