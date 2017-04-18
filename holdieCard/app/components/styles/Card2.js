
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Card = ({ logo, name, surname, profession, tel, email }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>

      <View style={styles.container}>
        <View style={{ backgroundColor: '#262631', width: 400, alignItems: 'center', height: 150, borderBottomLeftRadius: 12 }}>

          <View style={{ width: 200, backgroundColor: 'orange', height: 300, alignItems: 'center' }}>
            <Image style={[styles.cardLogo, { marginTop: 30 }]} source={logo} />
          </View>
        </View>

        <View style={styles.triangleCorner1} />
        <View style={styles.triangleCorner2} />


        <Text style={{ fontSize: 28, marginTop: 60, color: '#4C4C4E' }}>{name}</Text>
        <Text style={{ fontSize: 20, color: '#4C4C4E', marginBottom: 20 }}>{surname}</Text>
        <Text style={{ fontSize: 15, color: '#383535' }}>{profession}</Text>

        <View style={{ marginTop: 10, paddingLeft: 20, flexDirection: 'column' }}>

          <View style={{ flex: 1, flexDirection: 'row', height: 25 }}>
            <Icon name="phone" style={[styles.icon, { color: '#881A51' }]} />
            <Text style={styles.cardData}>{tel[0]}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', height: 25 }}>
            <Icon name="phone" style={[styles.icon, { color: '#881A51' }]} />
            <Text style={styles.cardData}>{tel[0]}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', height: 25 }}>
            <Icon name="mail" style={[styles.icon, { color: '#881A51' }]} />
            <Text style={styles.cardData}>{email}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', height: 25 }}>
            <Icon name="web" style={[styles.icon, { color: '#881A51' }]} />
            <Text style={styles.cardData}>{tel[0]}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', height: 25 }}>
            <Icon name="domain" style={[styles.icon, { color: '#881A51' }]} />
            <Text style={styles.cardData}>{tel[0]}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', height: 25 }}>
            <Icon name="place" style={[styles.icon, { color: '#881A51' }]} />
            <Text style={styles.cardData}>{tel[0]}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', height: 25 }}>
            <Icon name="language" style={[styles.icon, { color: '#881A51' }]} />
            <Text style={styles.cardData}>{tel[0]}</Text>
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
  container: {
    backgroundColor: '#D2D4D6',
    flexDirection: 'column',
    height: 500,
    flex: 1,
    alignItems: 'center'
  },
  cardLogo: {
    width: 100,
    height: 100,
  },
  cardData: {
    fontSize: 17,
    color: 'gray'
  },
  icon: {
    width: 40,
    height: 40,
    fontSize: 20,
  },
  triangleCorner1: {
    width: 120,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 200,
    borderTopWidth: 30,
    borderLeftColor: 'transparent',
    borderTopColor: 'orange',
    position: 'absolute',
    top: 150,
    zIndex: 10,
    left: 80
  },
  triangleCorner2: {
    width: 350,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 400,
    borderTopWidth: 70,
    borderLeftColor: 'transparent',
    borderTopColor: '#262631',
    position: 'absolute',
    top: 150,
  },

});

export default Card;
