import fetch from 'node-fetch'
const url = 'https://pokeapi.co/api/v2/pokemon/ditto';

fetch(url)
  // .then (response =>response.json())
  .then (data => data.json())
  .then(data => console.log(data))
  .catch(error => console.log())