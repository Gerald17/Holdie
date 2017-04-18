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

  if (Validator.isEmpty(data.country)) {
    errors.push('Seleccione su país');
    //errors.country = 'This field is required';
  }

  if (Validator.isEmpty(data.profession)) {
    errors.push('La profesión es requerida');
    //errors.proffesion = 'This field is required';
  }

  if (Validator.isEmpty(data.jobtitle)) {
    errors.push('El rubro es requerido');
    //errors.jobtitle = 'This field is required';
  }

  if (Validator.isEmpty(data.email)) {
    errors.push('El correo es requerido');
    //errors.email = 'This field is required';
  }

  if (!Validator.isEmail(data.email)) {
    errors.push('El formato del correo ingresado es invalido');
    //errors.email = 'Email is invalid';
  }


  return { errors, isValid: isEmpty(errors) };
}
