import {getAdsData} from './api.js';
import {disableAdForm} from './form.js';

import {
  disableFilterForm,
  enableFilterForm
} from './filter.js';

import {
  Templates,
  showMessage
} from './message.js';

import {
  initializeMap,
  addMapMainMarker,
  addMapMarkers
} from './map.js';

disableAdForm();
disableFilterForm();

initializeMap();
addMapMainMarker();

getAdsData(
  (data) => {
    addMapMarkers(data);
    enableFilterForm();
  },
  () => showMessage(Templates.FAILED),
);
