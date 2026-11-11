import { getchanls, getinput } from "../evnts/handlers.js";
import exportchaine from "../service/api.js";
import {  showcountries } from "../ui/preview.js";
import {  showcanals } from "../ui/preview.js";
let countries = JSON.parse(localStorage.getItem("cuntry"));
let chines = JSON.parse(localStorage.getItem("channls"))
getchanls()
getinput();
exportchaine();


showcanals(chines)
showcountries(countries);