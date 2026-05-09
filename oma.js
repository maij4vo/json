fetch("https://raw.githubusercontent.com/maij4vo/json/refs/heads/main/digicafe.json")
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP-virhe: " + response.status);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); // hyödyllinen JSON-rakenteen tarkistamiseen

        let tulostus = "";

        // Oletetaan että data on taulukko olioita
        data.forEach(alkio => {
            tulostus += `
                <h3>${alkio.nimi}</h3>
                <p>${alkio.kuvaus}</p>
            `;
        });

        document.getElementById("vastaus").innerHTML = tulostus;
    })
    .catch(error => {
        document.getElementById("vastaus").innerHTML =
            "Tietojen haku epäonnistui.";
        console.error(error);
    });

    

fetch("https://jaakkola.github.io/json/digitekniikat.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (responseJson) {
    kerro(responseJson);
  })
  .catch(function (error) {
    document.getElementById("vastaus").innerHTML =
      "<p>Tietoa ei pystytä hakemaan</p>";
  });

function kerro(data) {
  var teksti = "";

  // otsikko
  teksti = "<h1>" + data.otsikko + "</h1>";

  // kuvaus
  teksti = teksti + "<p>" + data.kuvaus + "</p>";

  // kuva
  teksti = teksti + "<p><img src='" + data.kuva + "' alt='kuva'></p>";

  // objekti: opintojakso
  teksti = teksti + "<h3>Opintojakso</h3>";
  teksti = teksti + "<p>Nimi: " + data.opintojakso.nimi + "</p>";
  teksti = teksti + "<p>Tunnus: " + data.opintojakso.tunnus + "</p>";
  teksti = teksti + "<p>Opintopisteet: " + data.opintojakso.opintopisteet + "</p>";

  // taulukko: sisältö
  teksti = teksti + "<h3>Sisältö</h3><ul>";
  for (var i = 0; i < data.sisalto.length; i++) {
    teksti = teksti + "<li>" + data.sisalto[i] + "</li>";
  }
  teksti = teksti + "</ul>";

  // objektitaulukko: tekniikat
  teksti = teksti + "<h3>Tekniikat</h3>";
  for (var i = 0; i < data.tekniikat.length; i++) {
    teksti = teksti +
      "<p><a href='" + data.tekniikat[i].linkki + "'>" +
      data.tekniikat[i].aihe +
      "</a></p>";
  }

  document.getElementById("vastaus").innerHTML = teksti;
}
``