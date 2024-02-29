const apiKey = "BJ2o63PLvACNWscdJ8801lv24krGbJjhOwc4j9zbFO2oTJ3nvh7N9IT2";

fetch("https://api.pexels.com/v1/search?query=cat", {
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

    const row = document.querySelector("#row");
    const loadFirstBtn = document.getElementById("load-first");

    loadFirstBtn.addEventListener("click", e => {
      row.innerHTML = "";

      arrayPhotos.forEach(photo => {
        const col = document.createElement("div");
        col.classList.add("col-md-4");

        const card = document.createElement("div");
        card.classList.add("card", "mb-4", "shadow-sm");

        const img = document.createElement("img");
        img.classList.add("bd-placeholder-img", "card-img-top");
        img.src = photo.src.landscape;
        img.alt = photo.alt;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const h5 = document.createElement("h5");
        h5.classList.add("card-title");
        h5.innerText = `photographer: ${photo.photographer}`;

        const p = document.createElement("p");
        p.classList.add("card-text");
        p.innerText = photo.alt;

        const btnContainerFlex = document.createElement("div");
        btnContainerFlex.classList.add("d-flex", "justify-content-between", "align-items-center");

        const btnGroup = document.createElement("div");
        btnGroup.classList.add("btn-group");

        const btnView = document.createElement("button");
        btnView.type = "button";
        btnView.classList.add("btn", "btn-sm", "btn-outline-secondary");
        btnView.innerText = "View";

        const btnHide = document.createElement("button");
        btnHide.type = "button";
        btnHide.classList.add("btn", "btn-sm", "btn-outline-secondary");
        btnHide.innerText = "Hide";

        const small = document.createElement("small");
        small.classList.add("text-muted");
        small.innerText = photo.id;

        btnGroup.appendChild(btnView);
        btnGroup.appendChild(btnHide);

        btnContainerFlex.appendChild(btnGroup);
        btnContainerFlex.appendChild(small);

        cardBody.appendChild(h5);
        cardBody.appendChild(p);
        cardBody.appendChild(btnContainerFlex);

        card.appendChild(img);
        card.appendChild(cardBody);

        col.appendChild(card);
        row.appendChild(col);

        btnHide.addEventListener("click", e => {
          e.target.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
        });
      });
    });
  })
  .catch(err => console.log(err));

//API per secondo bottone
fetch("https://api.pexels.com/v1/search?query=gatti", {
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

    const row = document.querySelector("#row");
    const loadSecondBtn = document.getElementById("load-second");

    loadSecondBtn.addEventListener("click", e => {
      row.innerHTML = "";
      arrayPhotos.forEach(photo => {
        const col = document.createElement("div");
        col.classList.add("col-md-4");

        const card = document.createElement("div");
        card.classList.add("card", "mb-4", "shadow-sm");

        const img = document.createElement("img");
        img.classList.add("bd-placeholder-img", "card-img-top");
        img.src = photo.src.landscape;
        img.alt = photo.alt;

        const cardBody = document.createElement("div");
        cardBody.classList.add("card-body");

        const h5 = document.createElement("h5");
        h5.classList.add("card-title");
        h5.innerText = `photographer: ${photo.photographer}`;

        const p = document.createElement("p");
        p.classList.add("card-text");
        p.innerText = photo.alt;

        const btnContainerFlex = document.createElement("div");
        btnContainerFlex.classList.add("d-flex", "justify-content-between", "align-items-center");

        const btnGroup = document.createElement("div");
        btnGroup.classList.add("btn-group");

        const btnView = document.createElement("button");
        btnView.type = "button";
        btnView.classList.add("btn", "btn-sm", "btn-outline-secondary");
        btnView.innerText = "View";

        const btnHide = document.createElement("button");
        btnHide.type = "button";
        btnHide.classList.add("btn", "btn-sm", "btn-outline-secondary");
        btnHide.innerText = "Hide";

        const small = document.createElement("small");
        small.classList.add("text-muted");
        small.innerText = photo.id;

        btnGroup.appendChild(btnView);
        btnGroup.appendChild(btnHide);

        btnContainerFlex.appendChild(btnGroup);
        btnContainerFlex.appendChild(small);

        cardBody.appendChild(h5);
        cardBody.appendChild(p);
        cardBody.appendChild(btnContainerFlex);

        card.appendChild(img);
        card.appendChild(cardBody);

        col.appendChild(card);
        row.appendChild(col);

        btnHide.addEventListener("click", e => {
          e.target.parentNode.parentNode.parentNode.parentNode.parentNode.remove();
        });
      });
    });
  })
  .catch(err => console.log(err));
