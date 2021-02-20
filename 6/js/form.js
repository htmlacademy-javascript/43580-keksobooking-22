const DIGITS = 5;

const adForm = document.querySelector('.ad-form');
const fieldsetList = adForm.children;
const fieldAddress = adForm.querySelector('#address');

const disableAdForm = () => {
  adForm.classList.add('ad-form--disabled');

  for (let fieldset of fieldsetList) {
    fieldset.disabled = true;
  }
};

const enableAdForm = () => {
  adForm.classList.remove('ad-form--disabled');

  for (let fieldset of fieldsetList) {
    fieldset.disabled = false;
  }
};

const setAddress = ({lat, lng}) => {
  fieldAddress.value = `${lat.toFixed(DIGITS)}, ${lng.toFixed(DIGITS)}`;
};

disableAdForm();

export {enableAdForm, setAddress};
