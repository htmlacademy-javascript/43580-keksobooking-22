const filterForm = document.querySelector('.map__filters');
const filterList = filterForm.children;

const disableFilterForm = () => {
  filterForm.classList.add('map__filters--disabled');

  for (let filter of filterList) {
    filter.disabled = true;
  }
};

const enableFilterForm = () => {
  filterForm.classList.remove('map__filters--disabled');

  for (let filter of filterList) {
    filter.disabled = false;
  }
};

disableFilterForm();

export {enableFilterForm};
