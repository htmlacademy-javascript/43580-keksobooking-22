const filterForm = document.querySelector('.map__filters');
const filterChildren = filterForm.children;

const disableFilterForm = () => {
  filterForm.classList.add('map__filters--disabled');

  for (let filter of filterChildren) {
    filter.disabled = true;
  }
};

const enableFilterForm = () => {
  filterForm.classList.remove('map__filters--disabled');

  for (let filter of filterChildren) {
    filter.disabled = false;
  }
};

const resetFilterForm = () => {
  filterForm.reset();
};

export {
  enableFilterForm,
  disableFilterForm,
  resetFilterForm
};
