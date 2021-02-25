const ADDRESS_DIGITS = 5;

const priceList = {
  bungalow: 0,
  flat: 1000,
  house: 5000,
  palace: 10000,
};

const adForm = document.querySelector('.ad-form');
const fieldsetChildren = adForm.children;
const fieldAddress = adForm.querySelector('#address');
const fieldPrice = adForm.querySelector('#price');
const fieldType = adForm.querySelector('#type');
const fieldTimein = adForm.querySelector('#timein');
const fieldTimeout = adForm.querySelector('#timeout');

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

fieldType.addEventListener('change', () => {
  const price = priceList[fieldType.value];

  fieldPrice.min = price;
  fieldPrice.placeholder = price;
});

fieldTimein.addEventListener('change', () => {
  fieldTimeout.value = fieldTimein.value;
});

fieldTimeout.addEventListener('change', () => {
  fieldTimein.value = fieldTimeout.value;
});

export {enableAdForm, disableAdForm, setAddress};
