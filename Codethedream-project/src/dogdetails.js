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
      const dogData1 = document.createElement("td");
      const dogData2  = document.createElement("td");
      const dogData3 =  document.createElement("td");

      dogData1.textContent = dogs[i].name;
      dogData2.textContent =  `${dogs[i].weight.imperial} lbs / ${dogs[i].weight.metric} kg`;
      dogData3.textContent =  dogs[i].life_span;
      dogRow.append(dogData1);
      dogRow.append(dogData2);
      dogRow.append(dogData3);
    }

  }

  


 

  
  
