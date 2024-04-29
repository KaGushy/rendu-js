let escapeGame = 'escapeRendu.json';
fetch(escapeGame)
   .then(response => response.json())
   .then(data => {
      console.log('Données récupérées avec succès :', data);

      const newTitre = document.createElement("h1");
      newTitre.textContent = `${data.entreprise.nomCommercial}`;
      document.body.appendChild(newTitre);

      const deuxTitre = document.createElement("h2")
      deuxTitre.textContent = `${data.entreprise.phraseAccroche} `;
      document.body.appendChild(deuxTitre);

      const buttom = document.createElement("button");
      buttom.textContent = `${data.entreprise.texteAppelAction}`;
      document.body.appendChild(buttom);


      const listeAvantages = document.createElement("ul");
      document.body.appendChild(listeAvantages);
      

   data.entreprise.avantagesClients.forEach(index =>{
      const li =document.createElement('li');
      li.textContent = `${index}`;
      listeAvantages.appendChild(li);
   });

   const listeActivites = document.createElement("ul");
   document.body.appendChild(listeActivites);

data.entreprise.activites.forEach(index =>{
   const titreActivite =document.createElement('h2');
   titreActivite.textContent = `${index.nom}`;

   const paragrapheActivites =document.createElement('p');
   paragrapheActivites.textContent = `${index.description}`;
listeActivites.appendChild(titreActivite);
listeActivites.appendChild(paragrapheActivites);

   const division =document.createElement('div');
   listeActivites.appendChild(division);

   const image = document.createElement('img');
   image.setAttribute('src',index.image);
   division.appendChild(image);
   listeActivites.appendChild(paragrapheActivites); 
   })
   const listeTemoignages = document.createElement("ul");
   document.body.appendChild(listeTemoignages);

data.entreprise.temoignages.forEach(index =>{
   const titrePrenom =document.createElement('h2');
   titrePrenom.textContent =`${index.prenom}`
   listeTemoignages.appendChild(titrePrenom);

   const paragrapheTemoignages =document.createElement('p');
   paragrapheTemoignages.textContent = `${index.typeExperience} ${index.commentaire} `;

   const divisionTemoignages =document.createElement('div');
   listeTemoignages.appendChild(divisionTemoignages);

   const imageTemoignages = document.createElement('img');
   imageTemoignages.setAttribute('src',index.image);
   divisionTemoignages.appendChild(imageTemoignages);
   listeTemoignages.appendChild(paragrapheTemoignages); 
   })
});
