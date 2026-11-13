import {  showcanals } from "../ui/preview.js";

let cannal = JSON.parse(localStorage.getItem("channls"))

const pays = document.querySelector("#cards");

export function getcode() {
    pays.addEventListener("click", function (e) {
        const id = e.target.closest("[data-id]")?.getAttribute("data-id");

        const result = cannal.filter(c => c.countryId === id);

        console.log(result);

       cannal.innerHTML = "";
       result.forEach(element => {
          console.log(element.name);
       });
     
      showcanals(result);
    });
   
}
