import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export function validateInput(data) {
  const errors = [];

  if (Validator.isEmpty(data.name)) {
    errors.push('El nombre es requerido');
    //errors.name = 'This field is required';
  }

  if (Validator.isEmpty(data.surname)) {
    errors.push('El apellido es requerido');
    //errors.lastname = 'This field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.push('El correo es requerido');
    //errors.email = 'This field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.push('El formato del correo ingresado es invalido');
    //errors.email = 'Email is invalid';
  }

  if (Validator.isEmpty(data.password)) {
    errors.push('La contraseña es requerida');
    //errors.password = 'This field is required';
  }

  if (Validator.isEmpty(data.passwordConfirmation)) {
    errors.push('La confirmacion de la contraseña es requerida');
    //errors.passwordConfirmation = 'This field is required';
  }

  if (!Validator.equals(data.password, data.passwordConfirmation)) {
    errors.push('Las contraseñas no coinciden');
    //errors.passwordConfirmation = 'Passwords must match';
  }

  return { errors, isValid: isEmpty(errors) };
}

export function toRemoteModel(data) {
  return {
    password: data.password,
    first_name: data.name,
    last_name: data.surname,
    email: data.email
  };
}
