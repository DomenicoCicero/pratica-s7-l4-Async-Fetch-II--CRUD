const apiKey = "BJ2o63PLvACNWscdJ8801lv24krGbJjhOwc4j9zbFO2oTJ3nvh7N9IT2";

const params = new URLSearchParams(window.location.search);
const cardId = params.get("cardId");
const query = params.get("query");

// console.log(window.location.search);
console.log(params);
console.log(cardId);
console.log(query);

const URL = `https://api.pexels.com/v1/search?query=${query}`;

fetch(URL, {
  method: "GET",
  headers: {
    "Content-Type": "application/json",
    Authorization: apiKey,
  },
})
  .then(response => {
    console.log(response);

    if (response.ok) {
      return response.json();
    } else {
      if (response.status === 400) {
        throw new Error("400 - Errore lato client");
      }

      if (response.status === 404) {
        throw new Error("404 - Dato non trovato");
      }

      if (response.status === 500) {
        throw new Error("500 - Errore lato server");
      }

      throw new Error("Errore nel reperimento dati");
    }
  })
  .then(data => {
    console.log(data);

    const arrayPhotos = data.photos;
    console.log(arrayPhotos);
    const container = document.querySelector(".col-md-8");
    const body = document.querySelector("body");

    arrayPhotos.forEach(photo => {
      if (photo.id === Number.parseInt(cardId)) {
        const card = document.createElement("div");
        card.classList.add("card", "my-4", "shadow-sm");

        const img = document.createElement("img");
        img.src = photo.src.landscape;
        img.classList.add("bd-placeholder-img", "card-img-top");

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const h5 = document.createElement("h5");
        h5.classList.add("card-title");
        h5.innerText = photo.photographer;

        const link = document.createElement("a");
        link.href = photo.photographer_url;
        link.innerText = `Visita il profilo dell'artista ${photo.photographer}`;

        cardBody.appendChild(h5);
        cardBody.appendChild(link);
        card.appendChild(img);
        card.appendChild(cardBody);

        container.appendChild(card);

        body.style.backgroundColor = photo.avg_color;
      }
    });
  })
  .catch(err => console.log(err));
