import {pluralizeWord} from './utils.js';

const typeList = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
};

const renderListElements = (element, array, change) => {
  const getListElements = () => {
    const fragment = document.createDocumentFragment();

    for (let value of array) {
      const copyElement = element.cloneNode(true);

      change(copyElement, value);

      fragment.append(copyElement);
    }

    return fragment;
  };

  const container = element.parentElement;

  if (array.length === 0) {
    container.remove();

    return false;
  }

  element.remove();
  container.append(getListElements());
};

const renderListFeatures = (element, array) => {
  const changeAttrFeature = (element, value) => {
    element.classList.add(`popup__feature--${value}`);
  };

  renderListElements(element, array, changeAttrFeature);
};

const renderListPhotos = (element, array) => {
  const changeAttrPhoto = (element, value) => {
    element.setAttribute('src', value);
  };

  renderListElements(element, array, changeAttrPhoto);
};

const createPropertyCard = ({author, offer}) => {
  const templateFragment = document.querySelector('#card').content;
  const template = templateFragment.querySelector('.popup').cloneNode(true);

  const title = template.querySelector('.popup__title');
  const address = template.querySelector('.popup__text--address');
  const price = template.querySelector('.popup__text--price');
  const type = template.querySelector('.popup__type');
  const capacity = template.querySelector('.popup__text--capacity');
  const time = template.querySelector('.popup__text--time');
  const description = template.querySelector('.popup__description');
  const feature = template.querySelector('.popup__feature');
  const photo = template.querySelector('.popup__photo');
  const avatar = template.querySelector('.popup__avatar');

  title.textContent = offer.title;
  address.textContent = offer.address;
  price.textContent = `${offer.price} ₽/ночь`;
  type.textContent = typeList[offer.type];
  capacity.textContent = `${pluralizeWord('ROOM', offer.rooms)} для ${pluralizeWord('GUST', offer.guests)}`;
  time.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  description.textContent = offer.description;

  renderListFeatures(feature, offer.features);
  renderListPhotos(photo, offer.photos);

  avatar.setAttribute('src', author.avatar);

  return template;
};

export default createPropertyCard;
