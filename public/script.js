
// Replace ./data.json with your JSON feed

const list = document.querySelector('ul');

fetch('users.json')
    .then(res => res.json())
    .then(data => {
    // Work with JSON data here
    data.forEach(post => {
      list.insertAdjacentHTML('beforeend', `<li>${post.id}</li>`);
    })
    });


function read() {
    
    //on recupere le div container
    let container = document.getElementById("container");
  
    //on cree la table
    let table = document.createElement("table");

    //on cree le nom des cases du haut du tableau
    let thead = document.createElement("thead");
    let tr = document.createElement("tr"); //ligne du tab

    fetch('users.json')
      .then(res => res.json())
      .then(data => {
        //on met dans cols le nom des differentes colonnes a creer
        let cols = Object.keys(data[0]);

        cols.forEach(post => {
          let th = document.createElement("th");
          th.innerText = post; //le nom du header est celui de la colonne
          tr.appendChild(th);
        })
        thead.appendChild(tr);
        table.append(tr);

        //pour chaque element du fichier on cree une ligne
      data.forEach((item) => {
      let tr = document.createElement("tr");
  
      // on met leurs valeurs dans vals
      let vals = Object.values(item);
  
      // on cree les cellules
      vals.forEach((elem) => {
        let td = document.createElement("td");
        td.innerText = elem; // on met dans les celulles le contenu du fichier
        tr.appendChild(td); // on associe la cellule a la ligne en cours
      });
      table.appendChild(tr); // et on associe la ligne au tableau
      });
      container.appendChild(table) // et on associe le tableau au div

        });
  
    
}
  
  
  // function read2() {
    
  //   //on recupere le div container
  //   let container = document.getElementById("container");
  
  //   //on cree la table
  //   let table = document.createElement("table");
  
  //   //on met dans cols le nom des differentes colonnes a creer
  //   let cols = Object.keys(data[0]);
  
  //   //on cree le nom des cases du haut du tableau
  //   let thead = document.createElement("thead");
  //   let tr = document.createElement("tr"); //ligne du tab
  
  //   // on cree les elements du haut du tableau header pour chaque entete
  //   cols.forEach((item) => {
  //     let th = document.createElement("th");
  //     th.innerText = item; //le nom du header est celui de la colonne
  //     tr.appendChild(th);
  //   });
  //   thead.appendChild(tr);
  //   table.append(tr);
  
  //   //pour chaque element du fichier on cree une ligne
  //   users.forEach((item) => {
  //     let tr = document.createElement("tr");
  
  //     // on met leurs valeurs dans vals
  //     let vals = Object.values(item);
  
  //     // on cree les cellules
  //     vals.forEach((elem) => {
  //       let td = document.createElement("td");
  //       td.innerText = elem; // on met dans les celulles le contenu du fichier
  //       tr.appendChild(td); // on associe la cellule a la ligne en cours
  //     });
  //     table.appendChild(tr); // et on associe la ligne au tableau
  //   });
  //   container.appendChild(table) // et on associe le tableau au div
  // }
  