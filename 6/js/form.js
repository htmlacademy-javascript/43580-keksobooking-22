const ADDRESS_DIGITS = 5;

const adForm = document.querySelector('.ad-form');
const fieldsetChildren = adForm.children;
const fieldAddress = adForm.querySelector('#address');

const disableAdForm = () => {
  adForm.classList.add('ad-form--disabled');

  for (let fieldset of fieldsetChildren) {
    fieldset.disabled = true;
  }
};

const enableAdForm = () => {
  adForm.classList.remove('ad-form--disabled');

  for (let fieldset of fieldsetChildren) {
    fieldset.disabled = false;
  }
};

const setAddress = ({lat, lng}) => {
  fieldAddress.value = `${lat.toFixed(ADDRESS_DIGITS)}, ${lng.toFixed(ADDRESS_DIGITS)}`;
};

export {enableAdForm, disableAdForm, setAddress};
