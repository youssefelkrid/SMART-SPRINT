const full_scren = document.getElementById("screen");
const chines = document.getElementById("chanls");
const canal = JSON.parse(localStorage.getItem("channls"));
const epg = document.getElementById("epg");


export function getphoto() {

    chines.addEventListener("click", function (e) {
       const id = e.target.closest("[chine-id]")?.getAttribute("chine-id");
       
           const affichier = canal.filter(c => c.id === id);
            full_scren.innerHTML  = `

                <img src=" ${affichier[0].logo}"  alt="countriesimgs" class="w-full h-full  bg-white rounded-lg p-1">
                     
            `
             
    });
      
}