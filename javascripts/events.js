const data = require('./data');

const catButton = document.getElementById('cat');
const dogButton = document.getElementById('dog');
const dinoButton = document.getElementById('dino');
const resetButton = document.getElementById('reset');

const catsOnly = () =>
{
  data.catInit();
};

const dogsOnly = () =>
{
  data.dogInit();
};

const dinosOnly = () =>
{
  data.dinoInit();
};

const addPetSelectionEventListeners = () => {
  catButton.addEventListener('click', catsOnly);
  dogButton.addEventListener('click', dogsOnly);
  dinoButton.addEventListener('click', dinosOnly);
  resetButton.addEventListener('click', data.initializer);
};

module.exports = addPetSelectionEventListeners;
