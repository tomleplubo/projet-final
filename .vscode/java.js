// recupere les données du json sneakers
const getData = async () => {
  try {
    const response = await fetch("https://cours-premier.glitch.me/data.json");
    const data = await response.json();
    console.log("1");
    displaySneakers(data.Sneakers);//afficher les sneakers
  } catch (erreur) {
    console.error("erreur", erreur);
  }
};

const displaySneakers = (list) => {
const SneakersContainer = document.querySelector("#chaussures");
SneakersContainer.classList.add('grid', 'grid-cols-1', 'sm:grid-cols-2', 'md:grid-cols-3', 'gap-4');

const sneakersDiv = document.createElement('div');// creer une div
sneakersDiv.classList.add('fixed', 'top-0', 'left-0', 'w-full', 'h-full','bg-yellow-400','flex', 'items-center', 'justify-center', 'hidden');
document.body.appendChild(sneakersDiv);// ajoute la div

list.forEach((sneakers, i) => {
  const carte = document.createElement('div');
  carte.classList.add('cursor-pointer', 'border-2', 'shadow-lg', 'text-center', 'flex', 'items-center', 'justify-center', 'flex-col');
  // ajoute au HTML les informations des sneakers
  carte.innerHTML = `
          <img class="w-full h-40 object-cover" src="${sneakers.img}"/>
          <div class="border-2 shadow-lg p-4 flex gap-4 items-center text-2xl font-bold">${sneakers.name}</div>
          <div class="border-2 shadow-lg p-4 flex gap-4 items-center">${sneakers.prix}</div>
          <div class="border-2 shadow-lg p-4 flex gap-4 items-center">${sneakers?.description?.slice(0, 100)}</div>
  `;


// ajoute une fenetre qui s'ouvre au clic
  carte.addEventListener('click', () => {
    sneakersDiv.innerHTML = `
      <div class="bg-white w-3/5 h-3/5 p-4 rounded-lg">
        <img class="w-full h-40 object-cover" src="${sneakers.img}"/>
        <div class="text-4xl">${sneakers.name}</div>
        <div class="text-lg">${sneakers.prix}€</div>
        <div class="text-sm">${sneakers?.description}</div>
      </div>
    `;
    sneakersDiv.classList.remove('hidden');
  });

  SneakersContainer.appendChild(carte);
});

// permet d'enlever la fenetre 
sneakersDiv.addEventListener('click', (event) => {
  if (event.target === sneakersDiv) {
    sneakersDiv.classList.add('hidden');
  }
});
};

getData();
