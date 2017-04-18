/**
 * ./app/components/CardDesign.js
 * @author  Gerald Estrada <gerardo.estrada.dg@gmail.com>
 */
'use strict';
import React, { Component } from 'react';
import * as db from '../utils/db';

import Card1 from './styles/Card1';
import Card2 from './styles/Card2';
import Card3 from './styles/Card3';
import Card4 from './styles/Card4';

const cameraImg = require('./img/camera.png');

class CardDesign extends Component {
  state = { isLoading: true }

  constructor(props) {
    super(props);
    this._getInfo();
  }

  _getInfo() {
    db.findObject('tmpCard')
      .then((c) => {
        console.log('Card finded: ', c)
        this.setState({ c, isLoading: false });
      })
      .catch((err) => {
        this.setState({ isLoading: false });
        console.log('No se pudo obtener la información', err);
      })
      .done();
  }

  render() {
    if (this.state.isLoading) {
      return null;
    }
    switch (this.props.design) {
      case 1:
        return (
          <Card1
            logo={cameraImg}
            name={this.state.c.name}
            surname={this.state.c.surname}
            profession={this.state.c.profession}
            tel=""
            email={this.state.c.email}
          />
        );
      case 2:
        return (
          <Card2
            logo={cameraImg}
            name={this.state.c.name}
            surname={this.state.c.surname}
            profession={this.state.c.profession}
            tel=""
            email={this.state.c.email}
          />
        );
      case 3:
        return (
          <Card3
            logo={cameraImg}
            name={this.state.c.name}
            surname={this.state.c.surname}
            profession={this.state.c.profession}
            tel=""
            email={this.state.c.email}
          />
        );
      case 4:
        return (
          <Card4
            logo={cameraImg}
            name={this.state.c.name}
            surname={this.state.c.surname}
            profession={this.state.c.profession}
            tel=""
            email={this.state.c.email}
          />
        );
      default:
        return null;
    }
  }
}

export default CardDesign;
