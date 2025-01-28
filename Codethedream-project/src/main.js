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

  
  for(let i =0; i < dogs.length-170; i++){
    console.log(dogs[i]);
    console.log(dogs[i].bred_for);
    console.log(dogs[i].breed_group);
    console.log(dogs[i].height);
    console.log(dogs[i].height.imperial);
    console.log(dogs[i].id);
    console.log(dogs[i].image);
    console.log(dogs[i].image.width);
    console.log(dogs[i].image.height);
    console.log(dogs[i].image.url);
    console.log(dogs[i].life_span);
    console.log(dogs[i].origin);
    console.log(dogs[i].reference_image_id);
    console.log(dogs[i].temperament);
    console.log(dogs[i].weight);
    console.log(dogs[i].weight.imperial);
    console.log(dogs[i].weight.metric);

  };

  
} 
      


