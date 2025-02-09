document.addEventListener("DOMContentLoaded", () => {
    const storedDogs = localStorage.getItem("dogsData");
   
    if (storedDogs) {
      const allDogs = JSON.parse(storedDogs);
      populateTable(allDogs);

    } else {
      console.log("No dog data found. Please visit the home page first.");
    }
  });
 

  function populateTable(dogs){
    const dogTable = document.querySelector(".dogtable")

    for(let i = 0; i < dogs.length ; i++){
      const dogRow = document.createElement("tr");
      dogTable.appendChild(dogRow);
      const dogName = document.createElement("td");
      const dogWeight  = document.createElement("td");
      const dogLifeSpan =  document.createElement("td");

      dogName.textContent = dogs[i].name;
      dogWeight.textContent =  `${dogs[i].weight.imperial} lbs / ${dogs[i].weight.metric} kg`;
      dogLifeSpan.textContent =  dogs[i].life_span;
      dogRow.append(dogName);
      dogRow.append(dogWeight);
      dogRow.append(dogLifeSpan);
    }

  }

  


 

  
  
