import './style.css'
import.meta.env

const dogList = document.querySelector(".doglist");
const dogPicture= document.querySelector("#dogpics");
const dogSearchField = document.getElementById("dogNameField");
const btn =document.querySelector("button");
const temperamentContainer = document.querySelector("#dog-temperament");
const para = document.createElement("p");


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
  localStorage.setItem("dogsData", JSON.stringify(data));
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

  console.log ("Found Dog Object:", foundDog);

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

function displayDogsPicture(dog) {
  dogPicture.innerHTML = ""; // Clears previous image
  
  if (!dog.reference_image_id) {
    dogPicture.textContent = "No image available for this breed.";
    return;
  }else{
    fetch(`https://api.thedogapi.com/v1/images/${dog.reference_image_id}`, {
      headers: { "x-api-key": dogApikey }
    })
    .then(response =>  {
      if (!response.ok){
        throw new Error(`HTTP error: ${response.status}`);
      }
        return response.json();
    })
    .then(imageData => {
      if (!imageData.url) {
        console.log(`No image found for ID ${dog.reference_image_id}`);
        dogPicture.textContent = "No image available for this breed.";
        return;
      }

      const dogImage = document.createElement("img");
      dogImage.setAttribute("src", imageData.url);
      console.log(`Fetched image URL: ${imageData.url}`);
      dogImage.setAttribute("alt", dog.name);
      dogPicture.append(dogImage);
    })
    .catch(error => {
      console.error("Error fetching image:", error);
      dogPicture.textContent = "Image could not be loaded.";
    });
}
}


function displayDogsTemp(dog) {
  temperamentContainer.innerHTML = ""; // Clears old content
  

  if(!dog.temperament){
    para.textContent =`This dog ${dog.name} has no temparment info in our database`;
  }else{
  para.textContent = `Known to be ${dog.temperament}`;
  }

  temperamentContainer.appendChild(para);
}



  
console.log(allDogs);
  
   
 

 

 
 

 
 

     

