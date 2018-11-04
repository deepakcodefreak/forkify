const axios = require('axios');

export default class Search{
    constructor(query){
        this.query = query;
    }

    async getResults(query){
        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '6c9ebeb7e2ba0a8fce8e16f047282fb6';
        try{
         const res = await axios.get(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${query}`);
         this.result = res.data.recipes;
         console.log(this.result);
        }catch(error){
            alert(error)
        }
        
        
    }
    

}





