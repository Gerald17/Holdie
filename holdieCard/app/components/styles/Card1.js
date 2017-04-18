import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Card = ({ logo, name, surname, profession, tel, email }) => {
  return (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <View style={styles.container}>
        <Image style={styles.cardLogo} source={logo} />
        <Text style={styles.cardName}>{name}</Text>
        <Text style={{ fontSize: 30, marginTop: -10, color: '#65BAB3' }}>{surname.toUpperCase()}</Text>
        <Text style={{ fontSize: 24, color: '#65BAB3', marginBottom: -20 }}>
          <Icon name="work" style={[styles.icon, { color: '#F5855C' }]} /> {profession}</Text>

        <View style={{ marginTop: 50, paddingLeft: 20, flexDirection: 'column' }}>

          <View style={{ flex: 1, flexDirection: 'row', height: 25 }}>
            <Icon name="phone" style={[styles.icon, { color: '#FDBE5D' }]} />
            <Text style={styles.cardData}>{tel[0]}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', height: 25 }}>
            <Icon name="phone" style={[styles.icon, { color: '#FDBE5D' }]} />
            <Text style={styles.cardData}>{tel[0]}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', height: 25 }}>
            <Icon name="mail" style={[styles.icon, { color: '#F5855C' }]} />
            <Text style={styles.cardData}>{email}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', height: 25 }}>
            <Icon name="web" style={[styles.icon, { color: '#FDBE5D' }]} />
            <Text style={styles.cardData}>{tel[0]}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', height: 25 }}>
            <Icon name="domain" style={[styles.icon, { color: '#FDBE5D' }]} />
            <Text style={styles.cardData}>{tel[0]}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', height: 25 }}>
            <Icon name="place" style={[styles.icon, { color: '#FDBE5D' }]} />
            <Text style={styles.cardData}>{tel[0]}</Text>
          </View>

          <View style={{ flex: 1, flexDirection: 'row', height: 25 }}>
            <Icon name="language" style={[styles.icon, { color: '#FDBE5D' }]} />
            <Text style={styles.cardData}>{tel[0]}</Text>
          </View>

        </View>

        <View style={styles.triangleCorner} />
        <View style={styles.triangleCornerRight} />
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
    backgroundColor: '#F8F8D5',
    flex: 1,
    alignItems: 'center',
    paddingTop: 20
  },
  cardLogo: {
    width: 100,
    height: 100,
  },
  cardName: {
    color: '#F5855C',
    fontSize: 35,
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
    borderTopWidth: 100,
    borderRightColor: 'transparent',
    borderTopColor: '#BACD73',
    position: 'absolute',
    bottom: 10,
  },
  triangleCornerRight: {
    position: 'absolute',
    bottom: 0,
    width: 350,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderLeftWidth: 400,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderBottomColor: '#F5855C'
  },

});

export default Card;
