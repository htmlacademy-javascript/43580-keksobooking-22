import {getAdsData} from './api.js';
import {disableAdForm} from './form.js';

import {
  disableFilterForm,
  enableFilterForm,
  filterAds
} from './filter.js';

import {
  Templates,
  showMessage
} from './message.js';

import {
  initializeMap,
  addMapMainMarker,
  addMapMarkers,
  removeMapMarkers
} from './map.js';

const AD_COUNT = 10;

disableAdForm();
disableFilterForm();

initializeMap();
addMapMainMarker();

getAdsData(
  (data) => {
    addMapMarkers(data.slice(0, AD_COUNT));

    enableFilterForm(() => {
      removeMapMarkers();

      addMapMarkers(filterAds(data).slice(0, AD_COUNT));
    });
  },
  () => showMessage(Templates.FAILED),
);
