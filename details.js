// const apiKey = "BJ2o63PLvACNWscdJ8801lv24krGbJjhOwc4j9zbFO2oTJ3nvh7N9IT2";

// const params = new URLSearchParams(window.location.search);
// const cardId = params.get("cardId");

// // console.log(window.location.search);
// console.log(params);
// console.log(cardId);

// const URL = `https://api.pexels.com/v1/search?query=?${cardId}`;

// fetch(URL, {
//   method: "GET",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: apiKey,
//   },
// })
//   .then(response => {
//     console.log(response);

//     if (response.ok) {
//       return response.json();
//     } else {
//       if (response.status === 400) {
//         throw new Error("400 - Errore lato client");
//       }

//       if (response.status === 404) {
//         throw new Error("404 - Dato non trovato");
//       }

//       if (response.status === 500) {
//         throw new Error("500 - Errore lato server");
//       }

//       throw new Error("Errore nel reperimento dati");
//     }
//   })
//   .then(photo => {
//     console.log(photo);
//   });
