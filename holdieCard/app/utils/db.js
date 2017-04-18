/**
 * ./app/utils/db.js
 * @author  Jonathan Palma <tanpalma04@gmail.com>
 */
import { AsyncStorage } from 'react-native';

export function save(key, value) {
  return AsyncStorage.setItem(key, value);
}

export function deleteById(key) {
  return AsyncStorage.removeItem(key);
}

export function saveObject(key, value) {
  console.log('Saving: ', JSON.stringify(value));
  return AsyncStorage.setItem(key, JSON.stringify(value));
}

export function find(key) {
  return AsyncStorage.getItem(key);
}

export function findObject(key) {
  return new Promise((resolve, reject) => {
    AsyncStorage.getItem(key)
      .then((value) => {
        resolve(JSON.parse(value));
      }, function () {
        reject(Error('Rejecting promise'));
      })
      .catch(function (err) {
        console.log('El resultado no tiene notación de objeto: ' + err);
        reject(Error('Broken promise: ' + err));
      })
      .done();
  });
}

export function findObjects(keyList) {
  return new Promise((resolve, reject) => {
    AsyncStorage.multiGet(keyList)
      .then((values) => {
        let objects = [];

        values.forEach(function (v) {
          let obj = JSON.parse(v[1]);
          obj.id = v[0];
          objects.push(obj);
        });

        resolve(objects);
      }, function () {
        reject(Error('Rejecting promise'));
      })
      .catch(function (err) {
        console.log('El resultado no tiene notación de objeto: ' + err);
        reject(Error('Broken promise: ' + err));
      })
      .done();
  });
}
