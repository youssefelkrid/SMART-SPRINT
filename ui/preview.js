
let countries = JSON.parse(localStorage.getItem("cuntry"));
let chines = JSON.parse(localStorage.getItem("channls"))
const cards = document.querySelector("#cards");
 const chanls = document.querySelector("#chanls");
 const epgs = document.getElementById("epg");

export function showcountries(data) {

        cards.innerHTML = "";

    data.forEach(c => {
        cards.innerHTML += `
       <div id="card"  data-id="${c.id}"  class="flex items-center gap-3 p-3 bg-[#171b20] rounded-xl border border-[#252a30] hover:bg-[#20252b] transition cursor-pointer">
                 
                <img src="${c.flagUrl}" alt="countriesimgs" class="w-12 h-12 object-contain bg-white rounded-lg p-1">

                <div class="flex-1">
                    <h1 class="text-white text-sm ">
                        ${c.name}
                    </h1>
                    <p class="text-gray-500 text-xs mt-1">
                        Live
                    </p>

                </div>


                <span class="text-lime-400 text-xs">
                    ●
                </span>


            </div>
      `


    });
}

export function showcanals(chines){
   
       chanls.innerHTML = "";

    chines.forEach(ch =>{
        chanls.innerHTML +=`
          <div id="cardes" chine-id = ${ch.id}  class="flex items-center gap-3 p-3 bg-[#171b20] rounded-xl border border-[#252a30] hover:bg-[#20252b] transition cursor-pointer">
                 
                <img src="${ch.logo}" alt="countriesimgs" class="w-12 h-12 object-contain bg-white rounded-lg p-1">

                <div class="flex-1">
                    <h1 class="text-white text-sm ">
                        ${ch.name}
                    </h1>
                    <p class="text-gray-500 text-xs mt-1">
                        ${ch.category}
                    </p>

                </div>


                <span class="text-lime-400 text-xs">
                    ●
                </span>


            </div>
          
           
        `




    })
}
  export function getepg(epg){
    epgs.innerHTML = "";
    epg.forEach(ep =>{

       epgs.innerHTML += `
            <h2 class="text-white text-lg font-bold mb-4">
                    ${ep.epg.currentProgram};
                </h2>
                <h3 class="text-white font-semibold">
                       ${ep.epg.startTime} ${ep.epg.endTime}
                </h3>
                <p class="text-gray-500 text-sm mt-1">
                        ${ep.epg.progressPercentage}
                </p>
       `
    });

  };
