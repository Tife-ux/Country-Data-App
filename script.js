const countries = document.querySelector(".countries");
document.querySelector("input").addEventListener("change", (e) => {
  countryName = e.target.value;
});
document.querySelector("button").addEventListener("click", () => {
  getCountryData(countryName);
});

async function getCountryData(countryName) {
  const response = await fetch(
    `https://restcountries.com/v2/name/${countryName}`
  );

  const data = await response.json();
  console.log(response);
  if (response.ok == true) {
    countries.innerHTML = "";
    const result = data[0];
    console.log(result);
    const neighbours = result.borders[0];
    console.log(neighbours);

    const html = `
        <article class="country">
         <img class="country__img" src=${result.flag} />
         <div class="country__data">
           <h3 class="country__name">${result.name}</h3>
           <h4 class="country__region">${result.region}</h4>
           <p class="country__row"><span>👫</span>${(
             result.population / 1000000
           ).toFixed(1)}M</p>
           <p class="country__row"><span>🗣️</span>${
             result.languages[0].name
           }</p>
           <p class="country__row"><span>💰</span>${
             result.currencies[0].name
           }</p>
         </div>
       </article> 
        `;
    countries.insertAdjacentHTML("beforeend", html);
    
     }

}

async function getCountryNeighbour(code){
    const response = await fetch(`https://restcountries.com/v2/alpha/${code}`)

    const data = await response.json()
    console.log(data)

    const html = `
        <article class="neighbour">
         <img class="country__img" src=${data.flag} />
         <div class="country__data">
           <h3 class="country__name">${data.name}</h3>
           <h4 class="country__region">${data.region}</h4>
           <p class="country__row"><span>👫</span>${(
             data.population / 1000000
           ).toFixed(1)}M</p>
           <p class="country__row"><span>🗣️</span>${
             data.languages[0].name
           }</p>
           <p class="country__row"><span>💰</span>${
             data.currencies[0].name
           }</p>
         </div>
       </article> 
        `;
    countries.insertAdjacentHTML("beforeend", html);
    getCountryNeighbour(neighbours)
}

// getCountryNeighbour("ghana")

// const resp1 = fetch(`https://restcountries.com/v2/alpha/${neighbors}`);

//     const resp2 = resp1.then(function (response) {
//       return response.json();
//     });

//     resp2.then(function (data) {
//       console.log(data);
//       const html = `
//               <article class="neighbour">
//               <img class="country__img" src=${data.flag} />
//               <div class="country__data">
//                 <h3 class="country__name">${data.name}</h3>
//                 <h4 class="country__region">${data.region}</h4>
//                 <p class="country__row"><span>👫</span>${(
//                   data.population / 1000000
//                 ).toFixed(1)}M</p>
//                 <p class="country__row"><span>🗣️</span>${
//                   data.languages[0].name
//                 }</p>
//                 <p class="country__row"><span>💰</span>${
//                   data.currencies[0].name
//                 }</p>
//               </div>
//             </article> 
//              `;
//       countries.insertAdjacentHTML("beforeend", html);
//     });

//   } else {
//     alert("Check your spelling");
 // }