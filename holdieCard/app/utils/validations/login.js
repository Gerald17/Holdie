import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';
import moment from 'moment';

export function validateInput(data) {
  const errors = [];

  if (Validator.isEmpty(data.identifier)) {
    //errors.identifier = 'This field is required';
    errors.push('El usuario es requerido');
  }

  if (!Validator.isEmail(data.identifier)) {
    errors.push('El formato del usuario ingresado es invalido');
    //errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    //errors.password = 'This field is required';
    errors.push('La contraseña es requerida');
  }

  return { errors, isValid: isEmpty(errors) };
}

export function toRemoteModel(data) {
  return {
    username: data.identifier,
    password: data.password
  };
}

export function toLocalModel(data, token) {
  return {
    username: data.identifier,
    password: data.password,
    token: token,
    created: moment().format()
  };
}
