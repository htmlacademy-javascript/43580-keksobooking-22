import {renderListElements, pluralizeWord} from './utils.js';

const typeList = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
};

const changeAttrFeature = (element, value) => {
  element.classList.add(`popup__feature--${value}`);
};

const changeAttrPhoto = (element, value) => {
  element.setAttribute('src', value);
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

  const features = template.querySelector('.popup__features');
  const featureItem = features.querySelector('.popup__feature');

  const photos = template.querySelector('.popup__photos');
  const photoItem = photos.querySelector('.popup__photo');

  const avatar = template.querySelector('.popup__avatar');

  title.textContent = offer.title;
  address.textContent = offer.address;
  price.textContent = `${offer.price} ₽/ночь`;
  type.textContent = typeList[offer.type];
  capacity.textContent = `${pluralizeWord('ROOM', offer.rooms)} для ${pluralizeWord('GUST', offer.guests)}`;
  time.textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  description.textContent = offer.description;

  renderListElements(features, featureItem, offer.features, changeAttrFeature);
  renderListElements(photos, photoItem, offer.photos, changeAttrPhoto);
  changeAttrPhoto(avatar, author.avatar);

  return template;
};

export default createPropertyCard;
