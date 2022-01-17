const url = 'https://pokeapi.co/api/v2/pokemon/90';

fetch(url)
  // .then (response =>response.json())
  .then (data => console.log(data));