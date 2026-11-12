import { getchanls, getinput } from "../evnts/handlers.js";
import exportchaine from "../service/api.js";
import { getepg  ,showcountries } from "../ui/preview.js";
import { getcode } from "../ui/sidebar.js";
import { getphoto } from "../ui/states.js";


let countries = JSON.parse(localStorage.getItem("cuntry"));
let chines = JSON.parse(localStorage.getItem("channls"));
getcode();
getchanls()
getinput();
exportchaine();
getphoto();
getepg(chines);

 
showcountries(countries);
