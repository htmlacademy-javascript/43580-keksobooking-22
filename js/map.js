/* global L */
/* eslint no-undef: "error" */

import {getRandomArrayObjects, INITIAL_COORDS} from './utils.js';
import {NUMBER_ADS, createAd} from './data.js';
import createPropertyCard from './property-card.js';
import {enableFilterForm} from './filter.js';
import {enableAdForm, setAddress} from './form.js';

const ZOOM_START = 13;

const adList = getRandomArrayObjects(NUMBER_ADS, createAd);

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainMarker = L.marker(INITIAL_COORDS, {
  draggable: true,
  icon: mainPinIcon,
  zIndexOffset: 1000,
});

const defaultPinIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});

const map = L.map('map-canvas').on('load', () => {
  setAddress(INITIAL_COORDS);

  enableFilterForm();
  enableAdForm();
}).setView(INITIAL_COORDS, ZOOM_START);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

mainMarker.addTo(map);

mainMarker.on('moveend', (evt) => {
  const location = evt.target.getLatLng();

  setAddress(location);
});

adList.forEach((ad) => {
  const {x, y} = ad.location;
  const card = createPropertyCard(ad);

  const marker = L.marker(
    {
      lat: x,
      lng: y,
    },
    {
      icon: defaultPinIcon,
    },
  );

  marker.addTo(map).bindPopup(card);
});
