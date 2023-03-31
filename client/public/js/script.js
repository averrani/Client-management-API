var url = new URL("http://localhost:3001/api/clients");

function create_tab(){
  $.get(url, function (data) {
    //on recupere le div container
    let container = document.getElementById("cont");
  
    //on cree la table
    let table = document.createElement("table");
    table.setAttribute('class', 'stable');
  
    //on cree le nom des cases du haut du tableau
    let thead = document.createElement("thead");
    let tr = document.createElement("tr"); //ligne du tableau
  
    let th = document.createElement("th");
    th.innerText = "Id"; 
    tr.appendChild(th);
    
    //on crée le nom des colonnes
    th = document.createElement("th"); th.innerText = "E-mail"; tr.appendChild(th);
    th = document.createElement("th"); th.innerText = "Prénom"; tr.appendChild(th);
    th = document.createElement("th"); th.innerText = "Nom"; tr.appendChild(th);
    th = document.createElement("th"); th.innerText = "Société"; tr.appendChild(th);
    th = document.createElement("th"); th.innerText = "Date"; tr.appendChild(th);
    th = document.createElement("th"); th.innerText = "Pays"; tr.appendChild(th);
    
    //et on l'accole au reste du tableau
    thead.appendChild(tr);
    table.append(tr);
  
    //pour chaque element du fichier on cree une ligne
    data.clients.forEach((item) => {
      //on cree une ligne pour chaque element
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

function addRemovePage(param){
  //on recupere l'url et on la transforme en objet url et on fait des verifications pour ne pas depasser les bornes
  let page = url.searchParams.get('page'); if (!page) page = 1; if(page == 1 && param == "-") return; if(page == 1000 && param == "+") return;

  //on change la page en fonction du parametre puis on change l'url
  if(param == "+")
    page++;
  else if(param == "-")
    page--;
  changeParam('page', page);
}

function colorPage(){
  //on recupere la page actuelle et on la colore
  let page = url.searchParams.get('page'); if (!page) page = 1;
  document.querySelector("#page"+page).setAttribute('class', "page-link bg-custom");
}

function changeParam(param, value){
  //on recupere l'url et on la transforme en objet url
  var search_params = url.searchParams;
  search_params.set(param, value);

  // replace current query string with new params
  url.search = search_params.toString();

  //on vide le div container puis on recree le tableau
  document.getElementById("cont").innerHTML = "";
  create_tab();
  document.getElementById("pagin").innerHTML = "";
  createPagin();
}

function changeSelectValue(){
  //on recupere la valeur du select  
  let e = document.getElementById("nbelt");
  //on change l'url
  changeParam('number', e.value);
  
}

function createPagin(){
  //on recupere la page actuelle
  let page = url.searchParams.get('page'); if (!page) page = 1;
  let e = document.getElementById("pagin");
  
  $.get(url, function (data) {
    let nbpages = data.totalPages;
    //verifications pour ne pas depasser les bornes
    let firstPage; if (page-3 < 0) firstPage = 1; else firstPage = Number(page) - 1; if (firstPage+3 > nbpages) firstPage = nbpages - 3;
    //on cree les boutons de pagination
    for (let i = firstPage; i <= firstPage+3; i++) {
      let a = document.createElement("a");
      a.setAttribute('class', 'page-link');
      a.setAttribute('href', '#');
      a.setAttribute('id', 'page'+i);
      a.setAttribute('onclick', `changeParam('page',${i})`);
      a.innerText = i;
      e.appendChild(a);
    }
    colorPage();
  });
}

//on attend que le DOM soit chargé pour executer les fonctions
document.addEventListener("DOMContentLoaded", function() {
  //on crée le tableau initial
  create_tab();
  //si on change le nombre d'éléments à afficher, on appelle changeSelectValue
  document.getElementById("nbelt").addEventListener("change", changeSelectValue);
  //on crée la pagination initiale
  createPagin();
  let TAG = document.querySelector("#page1");
  console.log(TAG);
  TAG.setAttribute('class', "page-link active");
  
});





