const ANY_OPTION = 'any';

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

const filterByValue = ({value}, offer) => {
  return value === ANY_OPTION ||
         offer === ((typeof offer === 'number') ? +value : value);
};

const filterByPrice = (price) => {
  switch (fieldPrice.value) {
    case 'low':
      return price < LOW_PRICE;
    case 'middle':
      return price >= LOW_PRICE && price <= HIGH_PRICE;
    case 'high':
      return price > HIGH_PRICE;
    case ANY_OPTION:
      return true;
  }
};

const filterByFeatures = (features) => {
  const checkedFeatures = fieldFeatures.querySelectorAll('input:checked');

  return [...checkedFeatures].every((input) => features.includes(input.value));
};

const filterAds = (ads) => ads.filter((ad) => {
  const {
    type,
    price,
    rooms,
    guests,
    features,
  } = ad.offer;

  return filterByValue(fieldType, type) &&
         filterByPrice(price) &&
         filterByValue(fieldRooms, rooms) &&
         filterByValue(fieldGuests, guests) &&
         filterByFeatures(features);
});

export {
  enableFilterForm,
  disableFilterForm,
  resetFilterForm,
  filterAds
};
