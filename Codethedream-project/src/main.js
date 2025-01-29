import './style.css'
import.meta.env

const Doglist = document.querySelector("#doglist");
console.log(Doglist);
const dogApikey = import.meta.env.VITE_DOG_API_KEY;
const dogurl = 'https://api.thedogapi.com/v1/breeds';

fetch(dogurl, {
  headers: {
    'x-api-key' : dogApikey
  }, 
  method: "GET"
})
.then(response => {
  if (!response.ok){
    throw new Error(`HTTP error: ${response.status}`);
  }
    return response.json();
})
.then(data => {
  displayDogs(data);
})
.catch((error) => {
  console.log(`There was a problem with the fetch operation:`, error
    )
});


function displayDogs(dogString){
  const dogs = dogString;
  

  for(let i =0; i < dogs.length-170; i++){
    console.log(dogs[i]);
    console.log(dogs[i].bred_for);
   
    const dogName = document.createElement("p");
    const dogImage = document.createElement("img");
    const dogTemper = document.createElement("p");
    dogName.textContent = `Dog name: ${dogs[i].name}` ;
    dogImage.setAttribute("id",dogs[i].image.id);
    dogImage.setAttribute("src",`${dogs[i].image.url}`);
    dogTemper.textContent = `Dog Temperament: ${dogs[i].temperament}` ;
    console.log(dogImage);
    Doglist.appendChild(dogName);
    Doglist.appendChild(dogImage);
    Doglist.appendChild(dogTemper);
  };

  console.log(Doglist);
} 
      

