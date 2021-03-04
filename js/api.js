const SERVER_URL = 'https://22.javascript.pages.academy/keksobooking/';

const throwError = ({status, statusText}) => {
  throw new Error(`${status} ${statusText}`);
};

const getData = (onSuccess, onFail) => {
  fetch(SERVER_URL + 'data')
    .then((response) => {
      if (response.ok) {
        return response.json();
      }

      throwError(response);
    })
    .then((json) => {
      onSuccess(json);
    })
    .catch(() => {
      onFail();
    });
};

const sendData = (onSuccess, onFail, body) => {
  fetch(SERVER_URL, {
    method: 'POST',
    body,
  })
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        throwError(response);
      }
    })
    .catch(() => {
      onFail();
    });
};

export {
  getData,
  sendData
};
