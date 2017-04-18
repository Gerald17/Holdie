/**
 * ./app/components/CardScanner.js
 * @author  Jonathan Palma <tanpalma04@gmail.com>
 */
'use strict';
import React, { Component } from 'react';
import { Image, Platform, PixelRatio, StyleSheet, Text, View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import ImagePicker from 'react-native-image-picker';
import GiftedSpinner from 'react-native-gifted-spinner';
import RNTesseractOcr from 'react-native-tesseract-ocr';

import Button from './Button';

class CardScanner extends Component {
  state = {
    imgSource: null,
    ocrResult: null,
    isLoading: false
  };

  componentDidMount() {
    this.selectPhoto();
  }

  selectPhoto() {
    const options = {
      quality: 1.0,
      maxWidth: 500,
      maxHeight: 500,
      storageOptions: {
        skipBackup: true
      }
    };

    this.setState({ isLoading: true });

    ImagePicker.showImagePicker(options, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled photo picker');
        Actions.pop();
      }
      else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      }
      else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      }
      else {
        let source;

        if (Platform.OS === 'android') {
          source = { uri: response.uri, isStatic: true };
        } else {
          source = { uri: response.uri.replace('file://', ''), isStatic: true };
        }

        this.setState({ imgSource: source });

        RNTesseractOcr.startOcr(response.path, 'LANG_SPANISH')
          .then((result) => {
            this.setState({ isLoading: false, ocrResult: result });
            console.log('OCR Result: ', result);
          })
          .catch((err) => {
            this.setState({ isLoading: false, ocrResult: 'No se pudo reconocer el texto en la tarjeta' });
            console.log('OCR Error: ', err);
          })
          .done();
      }
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.selectPhoto.bind(this)} borderRadius={true} >
          <View style={[styles.img, styles.imgContainer, { marginBottom: 20 }]}>
            {this.state.imgSource === null ? <Text>Select a Photo</Text> :
              <Image style={styles.img} source={this.state.imgSource} />
            }
          </View>
        </Button>
        {(this.state.isLoading) ?
          <GiftedSpinner style={styles.spinner} />
          :
          <Text>{this.state.ocrResult}</Text>
        }

      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imgContainer: {
    borderColor: '#9B9B9B',
    borderWidth: 1 / PixelRatio.get(),
    justifyContent: 'center',
    alignItems: 'center'
  },
  img: {
    borderRadius: 75,
    width: 150,
    height: 150
  },
  spinner: {
  }
});

export default CardScanner;
