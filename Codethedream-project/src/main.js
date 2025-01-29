import './style.css'
import.meta.env

const Doglist = document.querySelector(".doglist");
const DogPicture= document.querySelector("#dogpics");

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

  for(let i =0; i < dogs.length; i++){
   // console.log(dogs[i]);
    const dogName = document.createElement("li");
   
   // const dogTemper = document.createElement("p");

    dogName.textContent = `Dog name: ${dogs[i].name}` ;
    
   // dogTemper.textContent = `Dog Temperament: ${dogs[i].temperament}` ;
    Doglist.appendChild(dogName);
    
  //  Doglist.appendChild(dogTemper);
  };

  for(let j= 0; j <dogs.length-168; j++){
    const dogImage = document.createElement("img");
    dogImage.setAttribute("id",dogs[j].image.id);
    dogImage.setAttribute("src",`${dogs[j].image.url}`);
    DogPicture.appendChild(dogImage);
  }

  console.log(Doglist);
  console.log(DogPicture);

} 
     

