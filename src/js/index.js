import Search from './models/Search';

const state = {};

async function controlSearch(){
    // get query from view
        const query = 'pizza';

     if(query){
          
        //new search object and add it to state
            state.search  = new Search(query);
        // make ui ready for results
        
        // made search for recipies
            await state.search.getResults();

        // display result on UI
            console.log(state.search.result);

     }   

}


document.querySelector('.search').addEventListener('submit', el => {
    el.preventDefault();
    calSearch();
})




