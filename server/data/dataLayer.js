const file = "./data/users.json";
const fs = require('fs');

let data = {
    //renvoie tous les clients du fichier users.json
    getAllClients : function(){
        //get data from json file
        const rawdata = fs.readFileSync(file);
        //parse to object
        let clients = JSON.parse(rawdata);
        //return object
        return clients;
    },
    
    //renvoie que les number clients de la page page
    getClients : function(number, page){
        //get data from json file
        const rawdata = fs.readFileSync(file);
        //parse to object
        let clients = JSON.parse(rawdata);

        const total = clients.length;

        //si les param sont definis, on decoupe notre tab de clients a partir de facon a afficher
        //le number d'elts entre la page -1 et la page
        if(number && page){
            clients = clients.slice((page - 1)*number, page*number);
        }

        clients = {
            total : total,
            clients : clients
        };

        //return object
        return clients;
    }
};  

module.exports = data;