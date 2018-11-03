
//https://www.food2fork.com/api/search

const axios = require('axios');

async function getResults(query){
    const proxy = 'https://cors-anywhere.herokuapp.com/';
    const key = '6c9ebeb7e2ba0a8fce8e16f047282fb6';
    try{
     const res = await axios.get(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
     const recipes = res.data.recipes;
     console.log(recipes);
    }catch(error){
        alert(error)
    }
    
    
}

getResults('pizza')