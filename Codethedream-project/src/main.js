import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'
import.meta.env

document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn morewwd
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))

const DogPics = document. querySelector("pre")
const dogApikey = import.meta.env.VITE_DOG_API_KEY;
const dogurl = 'https://api.thedogapi.com/v1/breeds';

console.log(dogurl);

        fetch(dogApikey)
        .then(response => {
          if (!response.ok){
            throw new Error(`HTTP error: ${response.status}`);
          }
           return response.text();
        })
        .then(text => {
          console.log('Data received:' , text);
        })
        .catch((error) => {
          console.log(`There was a problem with the fetch operation:`, error
            )
        });
        
