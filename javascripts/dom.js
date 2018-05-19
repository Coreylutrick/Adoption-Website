const printToDom = (strang, divId) =>
{
  document.getElementById(divId).innerHTML = '';
  document.getElementById(divId).innerHTML += strang;
};

const domString = (pets) =>
{
  let strang = '';
  pets.forEach((pets) =>
  {
    strang +=   `<div class='pet col-sm-3 ${pets.type}'>`;
    strang +=     `<h3 class='name'>${pets.name}</h3>`;
    strang +=     `<img class='petImg' src='${pets.imageUrl}'>`;
    strang +=     `<p>${pets.color}</p>`;
    strang +=     `<p>${pets.specialSkill}</p>`;
    strang +=     `<p class='type'>${pets.type}</p>`;
    strang +=   `</div>`;
  });
  printToDom(strang, 'pets');
};

const catDomString = (cats) => {
  let strang = '';
  cats.forEach(cat =>
  {
    if (cat.type === 'cat')
    {
      strang +=   `<div class='pet col-sm-3 ${cat.type}'>`;
      strang +=     `<h3 class='name'>${cat.name}</h3>`;
      strang +=     `<img class='petImg' src='${cat.imageUrl}'>`;
      strang +=     `<p>${cat.color}</p>`;
      strang +=     `<p>${cat.specialSkill}</p>`;
      strang +=     `<p class='type'>${cat.type}</p>`;
      strang +=   `</div>`;
    };
    printToDom(strang, 'pets');
  });
};

const dogDomString = (dogs) => {
  let strang = '';
  dogs.forEach(dog =>
  {
    if (dog.type === 'dog')
    {
      strang +=   `<div class='pet col-sm-3 ${dog.type}'>`;
      strang +=     `<h3 class='name'>${dog.name}</h3>`;
      strang +=     `<img class='petImg' src='${dog.imageUrl}'>`;
      strang +=     `<p>${dog.color}</p>`;
      strang +=     `<p>${dog.specialSkill}</p>`;
      strang +=     `<p class='type'>${dog.type}</p>`;
      strang +=   `</div>`;
    };
    printToDom(strang, 'pets');
  });
};

const dinoDomString = (dinos) => {
  let strang = '';
  dinos.forEach(dino =>
  {
    if (dino.type === 'dino')
    {
      strang +=   `<div class='pet col-sm-3 ${dino.type}'>`;
      strang +=     `<h3 class='name'>${dino.name}</h3>`;
      strang +=     `<img class='petImg' src='${dino.imageUrl}'>`;
      strang +=     `<p>${dino.color}</p>`;
      strang +=     `<p>${dino.specialSkill}</p>`;
      strang +=     `<p class='type'>${dino.type}</p>`;
      strang +=   `</div>`;
    };
    printToDom(strang, 'pets');
  });
};

module.exports =
{
  printToDom,
  domString,
  dogDomString,
  catDomString,
  dinoDomString,
};
