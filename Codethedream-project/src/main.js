import './style.css'
import.meta.env

const DogPics = document. querySelector("pre")
const dogApikey = import.meta.env.VITE_DOG_API_KEY;
const dogurl = 'https://api.thedogapi.com/v1/breeds';

fetch(dogurl, {
  headers: {
    'x-api-key' : dogApikey
  }
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
  
  for(let i =0; i < dogs.length; i++){
    console.log(dogs[i]);
  }

  
}
      


