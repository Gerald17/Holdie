import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Card = ({ logo, name, surname, profession, tel, email }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>

      <View style={styles.container}>
        <View style={{ backgroundColor: '#4C4B4D', width: 400, alignItems: 'center', height: 150 }}>
          <Image style={[styles.cardLogo, { marginTop: 30 }]} source={logo} />
        </View>
        <View style={styles.triangleCorner} />
        <View style={styles.triangleCorner2} />
        <Text style={{ fontSize: 20, marginTop: 80, color: '#4C4C4E' }}>{name}</Text>
        <Text style={{ fontSize: 20, color: '#4C4C4E' }}>{surname}</Text>
        <Text style={{ fontSize: 15, color: '#383535', marginTop: 10, marginBottom: 10 }}>{profession}</Text>

        <View style={{ marginTop: 10, paddingLeft: 20, flexDirection: 'column', height: 120 }}>

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
    height: 100
  },
  cardData: {
    fontSize: 17,
    color: '#65BAB3'
  },
  icon: {
    width: 40,
    height: 40,
    fontSize: 18,
  },
  triangleCorner: {
    width: 350,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 400,
    borderTopWidth: 70,
    borderRightColor: 'transparent',
    borderTopColor: '#4C4C4E',
    position: 'absolute',
    top: 140,
    zIndex: 1
  },
  triangleCorner2: {
    width: 350,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 400,
    borderTopWidth: 80,
    borderRightColor: 'transparent',
    borderTopColor: '#373435',
    position: 'absolute',
    top: 150,
  },

});

export default Card;
