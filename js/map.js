/* global L:readonly */
/* eslint no-undef: "error" */

import createPropertyCard from './property-card.js';
import {
  enableAdForm,
  setAddress
} from './form.js';

const INITIAL_COORDS = {
  lat: 35.68951,
  lng: 139.69171,
};

const MARKER_ZINDEX = 1000;

const MapSettings = {
  ZOOM: 13,
  URL: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  ATTR: {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  },
};

const PinsSettings = {
  DEFAULT: {
    iconUrl: './img/pin.svg',
    iconSize: [36, 36],
    iconAnchor: [18, 36],
  },
  MAIN: {
    iconUrl: './img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  },
};

const map = L.map('map-canvas');

const mainPinIcon = L.icon(PinsSettings.MAIN);
const mainMarker = L.marker(INITIAL_COORDS, {
  icon: mainPinIcon,
  zIndexOffset: MARKER_ZINDEX,
});

const initializeMap = () => {
  map.on('load', () => {
    enableAdForm();
    setAddress(INITIAL_COORDS);
  });

  map.setView(INITIAL_COORDS, MapSettings.ZOOM);

  L.tileLayer(MapSettings.URL, MapSettings.ATTR).addTo(map);
};

const setCoordsMainMarker = (evt) => {
  const location = evt.target.getLatLng();

  setAddress(location);
};

const resetCoordsMainMarker = () => {
  mainMarker.setLatLng(INITIAL_COORDS);
};

const disableMapMainMarker = () => {
  mainMarker.dragging.disable();

  mainMarker.off('moveend', setCoordsMainMarker);
};

const enableMapMainMarker = () => {
  mainMarker.dragging.enable();

  mainMarker.on('moveend', setCoordsMainMarker);
};

const addMapMainMarker = () => {
  mainMarker.addTo(map);
  enableMapMainMarker();
};

const addMapMarkers = (ads) => {
  const pinIcon = L.icon(PinsSettings.DEFAULT);

  ads.forEach((ad) => {
    const card = createPropertyCard(ad);
    const marker = L.marker(ad.location, {
      icon: pinIcon,
    });

    marker.addTo(map).bindPopup(card);
  });
};

export {
  INITIAL_COORDS,
  initializeMap,
  addMapMainMarker,
  addMapMarkers,
  disableMapMainMarker,
  enableMapMainMarker,
  resetCoordsMainMarker
};
