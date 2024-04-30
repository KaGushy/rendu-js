
let escapeGamer = 'escapeRendu.json';
fetch(escapeGamer)
   .then(response => response.json())
   .then(data => {
      const header = document.querySelector('header');
      const main = document.querySelector('main');
      const footer = document.querySelector('footer');
      console.log('Données récupérées avec succès :', data);

      const newTitre = document.createElement("h1");
      newTitre.textContent = `${data.entreprise.nomCommercial}`;
      header.appendChild(newTitre);

      const deuxTitre = document.createElement("h2")
      deuxTitre.textContent = `${data.entreprise.phraseAccroche} `;
      header.appendChild(deuxTitre);

      const buttom = document.createElement("button");
      buttom.setAttribute('id');
      buttom.textContent = `${data.entreprise.texteAppelAction}`;
      header.appendChild(buttom);


      const listeAvantages = document.createElement("ul");
      main.appendChild(listeAvantages);


      data.entreprise.avantagesClients.forEach(index => {
         const li = document.createElement('li');
         li.textContent = `${index}`;
         listeAvantages.appendChild(li);
      });

      const listeActivites = document.createElement("ul");
      listeActivites.setAttribute('id', 'experience');
      main.appendChild(listeActivites);

      data.entreprise.activites.forEach(index => {
         const activitesDiv = document.createElement('div');
         activitesDiv.classList.add('activitesDivision');

         const titreActivite = document.createElement('h2');
         titreActivite.textContent = `${index.nom}`;

         const paragrapheActivites = document.createElement('p');
         paragrapheActivites.textContent = `${index.description}`;
         listeActivites.appendChild(titreActivite);
         listeActivites.appendChild(paragrapheActivites);

         const division = document.createElement('div');
         listeActivites.appendChild(division);

         const image = document.createElement('img');
         image.classList.add('imgActivites')
         image.setAttribute('src', index.image);
         division.appendChild(image);
         listeActivites.appendChild(paragrapheActivites);
      })

      const listeTemoignages = document.createElement("ul");
      listeTemoignages.setAttribute('id', 'temoignages');
      main.appendChild(listeTemoignages);

      data.entreprise.temoignages.forEach(index => {
         const temoignagesDiv = document.createElement('div');
         temoignagesDiv.classList.add('temoignagesDivision');

         const titrePrenom = document.createElement('h2');
         titrePrenom.textContent = `${index.prenom}`
         listeTemoignages.appendChild(titrePrenom);

         const titreTemoignages = document.createElement('h3');
         titreTemoignages.textContent = `${index.typeExperience} `;

         const paragrapheTemoignages = document.createElement('p');
         paragrapheTemoignages.textContent = `${index.commentaire} `;
         console.log(titreTemoignages);

         const divisionTemoignages = document.createElement('div');
         listeTemoignages.appendChild(divisionTemoignages);

         const imageTemoignages = document.createElement('img');
         imageTemoignages.setAttribute('src', index.image);
         imageTemoignages.classList.add('imgTemoignages');
         listeTemoignages.appendChild(titreTemoignages);
         listeTemoignages.appendChild(paragrapheTemoignages);
         divisionTemoignages.appendChild(imageTemoignages);
      });
      const mapContainer = document.createElement('div');
      mapContainer.setAttribute('id', 'mapId');
      main.appendChild(mapContainer);
      var map = L.map('mapId').setView([45.750000, 4.850000], 13);
      L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
         maxZoom: 19,
         attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      }).addTo(map);
   });




