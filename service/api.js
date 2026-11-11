 let channls = [] ;
export default async function exportchaine() {
    try{
          let response = await fetch('./data/chanls.json')
        let data = await response.json();
        channls = data ;
         localStorage.setItem("channls" , JSON.stringify(channls))
       
    }
    catch {
       console.log("erreur de serveur");
    }
    
}

let cuntry = [] ;
    async function exportcuntry(){
    try{
        let resultat = await fetch('./data/cuntry.json');
        let  datas = await resultat.json();
        cuntry = datas ;
        localStorage.setItem("cuntry" , JSON.stringify(cuntry))
    }
    catch{

        console.log("erreur de serveur"); 
    }
}
exportcuntry();
