/* global L:readonly */
/* eslint no-undef: "error" */

import createPropertyCard from './property-card.js';
import {enableFilterForm} from './filter.js';
import {enableAdForm, setAddress} from './form.js';

const ZOOM_START = 13;

const INITIAL_COORDS = {
  lat: 35.68951,
  lng: 139.69171,
};

const map = L.map('map-canvas');

const mainPinIcon = L.icon({
  iconUrl: './img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const defaultPinIcon = L.icon({
  iconUrl: './img/pin.svg',
  iconSize: [36, 36],
  iconAnchor: [18, 36],
});

const mainMarker = L.marker(INITIAL_COORDS, {
  draggable: true,
  icon: mainPinIcon,
  zIndexOffset: 1000,
});

const initializeMap = () => {
  map.on('load', () => {
    setAddress(INITIAL_COORDS);

    enableFilterForm();
    enableAdForm();
  }).setView(INITIAL_COORDS, ZOOM_START);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
};

const addMapMainMarker = () => {
  mainMarker.addTo(map);
};

const addMapMarkers = (ads) => {
  ads.forEach((ad) => {
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
};

mainMarker.on('moveend', (evt) => {
  const location = evt.target.getLatLng();

  setAddress(location);
});

export {initializeMap, addMapMainMarker, addMapMarkers};
