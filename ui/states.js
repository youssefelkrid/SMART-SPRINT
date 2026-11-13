import { getepg } from "./preview.js";

const full_scren = document.getElementById("screen");
const chines = document.getElementById("chanls");
const canal = JSON.parse(localStorage.getItem("channls"));
const epg = document.getElementById("epg");


export function getphoto() {

    chines.addEventListener("click", function (e) {
       const id = e.target.closest("[chine-id]")?.getAttribute("chine-id");
       
           const affichier = canal.filter(c => c.id === id);
            full_scren.innerHTML  = `

              <video controls width="100%" height="100%">
  <source src="${affichier[0].streamUrl}" type="video/webm" />
  Votre navigateur ne prend pas en charge la lecture de vidéos HTML5.
</video>

                     
            `
            getepg(affichier[0])
             
    });
      
}