import { showcanals, showcountries } from "../ui/preview.js";



let search =  document.getElementById("search");
let  search_ch = document.getElementById("search-ch");
let channls = JSON.parse(localStorage.getItem("channls"));
let countries = JSON.parse(localStorage.getItem("cuntry"));


 export function getinput(){
    search.addEventListener("input" , function(e){
        
        let input = search.value ;
        
        const catigorie = countries.filter(catalog => {
            return catalog.countryCode.toUpperCase().includes(input.toUpperCase());
        })
                
        showcountries(catigorie);
        
})
 }
 
 export function getchanls(){
    search_ch.addEventListener("input" , function(e){
        
        let chins= search_ch.value ;
        
        const chines = channls.filter(chain => {
            return chain.name.toUpperCase().includes(chins.toUpperCase());

        })
            
        showcanals(chines);
        
})
 }

