const REQUEST_SERVER = 'http://138.197.112.35';
const REQUEST_PORT = '/';
const REQUEST_PATH = 'api/';
const TIME_OUT = 20000;
const conf = { data: null };

export function get(endpoint) {
  console.log('Fetching: ' + endpoint);
  if (conf.data != null) {
    return fetch(REQUEST_SERVER + REQUEST_PORT + REQUEST_PATH + endpoint,
      {
        method: 'get',
        headers: {
          'Authorization': 'null'
        },
      });
  } else {
    return fetch(REQUEST_SERVER + REQUEST_PORT + REQUEST_PATH + endpoint, { method: 'get' });
  }
}

export function post(endpoint, bodyRequest) {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(function () { reject('Revise su conexión a internet'); }, TIME_OUT);
    console.log('TRYING TO POST: ' + JSON.stringify(bodyRequest));

    fetch(REQUEST_SERVER + REQUEST_PORT + REQUEST_PATH + endpoint,
      {
        method: 'post',
        headers: {
          'Accept': 'application/json',
          'Authorization': 'null', // Token {token}
          'Content-type': 'application/json'
        },
        body: JSON.stringify(bodyRequest)
      })
      .then((response) => {
        clearTimeout(timeout);
        resolve(response);
      })
      .catch((error) => console.log(error))
      .done();
  });

}
