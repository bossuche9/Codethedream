import './style.css'
import.meta.env

const Doglist = document.querySelector(".doglist");
const DogPicture= document.querySelector("#dogpics");
const DogSearchField = document.getElementById("dogNameField");
const btn =document.querySelector("button");
const form =document.querySelector("form");


btn.addEventListener("click", () => {
  console.log("search field value is",DogSearchField.value);
})

const dogApikey = import.meta.env.VITE_DOG_API_KEY;
const dogurl = 'https://api.thedogapi.com/v1/breeds';

let allDogs = [];

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
  allDogs = data;
  displayDogsList();
})
.catch((error) => {
  console.log(`There was a problem with the fetch operation:`, error
    )
});

function displayDogsList(){
  for(let i =0; i < allDogs.length; i++){
    console.log(allDogs[i].name);
    const dogName = document.createElement("li");
    dogName.textContent = `Dog name: ${allDogs[i].name}` ;
    Doglist.appendChild(dogName);
  };
}


btn.addEventListener("click", () => {
  event.preventDefault(); // prevents refreshing and lets image save.
  const searchValue = DogSearchField.value.trim().toLowerCase();
  const foundDog = allDogs.find(dog => dog.name.toLowerCase() === searchValue)

    if (!foundDog){
      DogSearchField.setCustomValidity("That dogs is not part of the list")
      DogSearchField.reportValidity();
    }
    else{
      DogSearchField.setCustomValidity("");
      displayDogsPicture(foundDog);
      DogSearchField.value = "";      
    }
});

function displayDogsPicture(dog){
  DogPicture.innerHTML = ""; // removes the old picture and prevents overflow
  if (!dog.image || !dog.image.url) {
    DogPicture.textContent = "No image available for this breed.";
    return;
  }

  const dogImage = document.createElement("img");
  dogImage.setAttribute("src",dog.image.url);
  dogImage.setAttribute("alt",dog.name);
  DogPicture.append(dogImage);
}


  

  
   
 

 

 
 

 
 

     

