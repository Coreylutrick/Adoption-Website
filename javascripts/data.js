const loadPets = require('./pets');
const dom = require('./dom');

const whenPetsLoad = function ()
{
  const petArray = JSON.parse(this.responseText).pets;
  dom.domString(petArray);
};

const badPets = function ()
{
  console.error('zeds dead baby');
};

const initializer = () =>
{
  loadPets(whenPetsLoad, badPets);
};

const catLoad = function ()
{
  const catArray = JSON.parse(this.responseText).pets;
  dom.catDomString(catArray);
};

const dogLoad = function ()
{
  const dogArray = JSON.parse(this.responseText).pets;
  dom.dogDomString(dogArray);
};

const dinoLoad = function ()
{
  const dinoArray = JSON.parse(this.responseText).pets;
  dom.dinoDomString(dinoArray);
};

const catInit = function ()
{
  loadPets(catLoad, badPets);
};

const dogInit = function ()
{
  loadPets(dogLoad, badPets);
};

const dinoInit = function ()
{
  loadPets(dinoLoad, badPets);
};

module.exports =
{
  initializer,
  catInit,
  dogInit,
  dinoInit,
};
