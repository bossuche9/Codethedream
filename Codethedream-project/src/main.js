import './style.css'
import.meta.env

const dogList = document.querySelector(".doglist");
const dogPicture= document.querySelector("#dogpics");
const dogSearchField = document.getElementById("dogNameField");
const btn =document.querySelector("button");
const temperamentContainer = document.querySelector("#dog-temperament");


btn.addEventListener("click", () => {
  console.log("search field value is",dogSearchField.value);
})

const dogApikey = import.meta.env.VITE_DOG_API_KEY;
const dogurl = 'https://api.thedogapi.com/v1/breeds';


let allDogs ;

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

    const dogName = document.createElement("li");
    dogName.textContent = `Dog name: ${allDogs[i].name}` ;
    dogList.appendChild(dogName);
  };
}


btn.addEventListener("click", () => {
  event.preventDefault(); // prevents refreshing and lets image save.
  const searchValue = dogSearchField.value.trim().toLowerCase();
  const foundDog = allDogs.find(dog => dog.name.toLowerCase() === searchValue)

    if (!foundDog){
      dogSearchField.setCustomValidity("That dogs is not part of the list")
      dogSearchField.reportValidity();
    }
    else{
      dogSearchField.setCustomValidity("");
      displayDogsPicture(foundDog);
      displayDogsTemp(foundDog);
      dogSearchField.value = "";      
    }
});

function displayDogsPicture(dog){
  dogPicture.innerHTML = ""; // removes the old picture and prevents overflow
  if (!dog.image || !dog.image.url) {
    dogPicture.textContent = "No image available for this breed.";
    return;
  }

  const dogImage = document.createElement("img");
  dogImage.setAttribute("src",dog.image.url);
  dogImage.setAttribute("alt",dog.name);
  dogPicture.append(dogImage);
}

function displayDogsTemp(dog) {
  temperamentContainer.innerHTML = ""; // Clears old content

  const para = document.createElement("p");
  para.textContent = `Known to be ${dog.temperament}`;
  temperamentContainer.appendChild(para);
}



  
console.log(allDogs);
  
   
 

 

 
 

 
 

     

