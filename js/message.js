import {isEscEvent} from './utils.js';

const Templates = {
  OK: 'success',
  ERROR: 'error',
  FAILED: 'request-failed',
};

const createMessage = (name) => {
  const templateFragment = document.querySelector('#' + name).content;
  const template = templateFragment.querySelector('.' + name).cloneNode(true);

  const onMessageEscKeydown = (evt) => {
    if (isEscEvent(evt)) {
      closeMessage();
    }
  };

  const closeMessage = () => {
    template.remove();
    document.removeEventListener('keydown', onMessageEscKeydown);
  };

  template.addEventListener('click', closeMessage);
  document.addEventListener('keydown', onMessageEscKeydown);

  return template;
};

const showMessage = (name = Templates.ERROR) => {
  const template = createMessage(name);

  document.querySelector('main').appendChild(template);
};

export {
  Templates,
  showMessage
};
