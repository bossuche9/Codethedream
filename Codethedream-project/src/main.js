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
    return response.text();
})
.then(text => {
  displayDogs(text);
 // console.log('Data received:' , text);
})
.catch((error) => {
  console.log(`There was a problem with the fetch operation:`, error
    )
});

function displayDogs(dogString){
  const dogs = JSON.parse(dogString);

  
  for(let i =0; i < dogs.length-160; i++){
    console.log(dogs[i]);
    console.log(dogs[i].bred_for);
   
    const dogData = document.createElement("p")
    const dogImage = document.createElement("img")
    dogData.textContent = `${dogs[i].name}` ;
    dogImage.setAttribute("id",dogs[i].image.id);
    dogImage.setAttribute("width",dogs[i].image.width );
    dogImage.setAttribute("height",dogs[i].image.height );
    dogImage.setAttribute("src",dogs[i].image.url);
    console.log(dogImage);
    Doglist.appendChild(dogData);
    Doglist.appendChild(dogImage);


   // console.log(dogs[i].weight.metric);

  };

  console.log(Doglist);
} 
      


