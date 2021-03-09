const DEFAULT_OPTION = 'any';

const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;

const filterForm = document.querySelector('.map__filters');
const filterChildren = filterForm.children;

const fieldType = filterForm.querySelector('#housing-type');
const fieldPrice = filterForm.querySelector('#housing-price');
const fieldRooms = filterForm.querySelector('#housing-rooms');
const fieldGuests = filterForm.querySelector('#housing-guests');
const fieldFeatures = filterForm.querySelector('#housing-features');

const disableFilterForm = () => {
  filterForm.classList.add('map__filters--disabled');

  for (let filter of filterChildren) {
    filter.disabled = true;
  }
};

const enableFilterForm = (refresh) => {
  filterForm.classList.remove('map__filters--disabled');

  for (let filter of filterChildren) {
    filter.disabled = false;
  }

  filterForm.addEventListener('change', refresh);
  filterForm.addEventListener('reset', () => setTimeout(refresh));
};

const resetFilterForm = () => filterForm.reset();

const filterByValue = (field, offerValue) => {
  const selectedValue = field.value;

  return selectedValue === DEFAULT_OPTION || selectedValue === String(offerValue);
};

const filterByPrice = (selectedPrice, offerPrice) => {
  switch (selectedPrice) {
    case 'low':
      return offerPrice < LOW_PRICE;
    case 'middle':
      return offerPrice >= LOW_PRICE && offerPrice <= HIGH_PRICE;
    case 'high':
      return offerPrice > HIGH_PRICE;
    case 'any':
      return true;
  }
};

const filterByFeatures = (offerFeatures) => {
  const checkedFeatures = fieldFeatures.querySelectorAll('input:checked');

  return [...checkedFeatures].every((input) => offerFeatures.includes(input.value));
};

const filterAds = ({offer}) => {
  const type = filterByValue(fieldType, offer.type);
  const price = filterByPrice(fieldPrice.value, offer.price);
  const rooms = filterByValue(fieldRooms, offer.rooms);
  const guests = filterByValue(fieldGuests, offer.guests);
  const features = filterByFeatures(offer.features);

  return type && price && rooms && guests && features;
};

export {
  enableFilterForm,
  disableFilterForm,
  resetFilterForm,
  filterAds
};
