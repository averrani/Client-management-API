const express = require('express');
const business = require('../business/business');
const app = express();
var cors = require('cors')

const apiServ = {
    
    //fct qui recupere les données et les renvoie au path indiqué
    start : function(port) {

        app.use(express.json()); 
        
        app.use(cors()); 
        
        app.get('/api/clients/all', (req,res) => {   
            
            const clients = business.getAllClients();

            //transforme en flux lisible par le navigateur
            res.status(200).json(clients);
        })

        //req reprend les donnees fournies par la requete
        app.get('/api/clients', (req,res) => {   
            
            const number = req.query.number;
            const page = req.query.page;
            
            const clients = business.getClients(number, page);

            //transforme en flux lisible par le navigateur
            res.status(200).json(clients);
        })

        //ajoute un user
        app.post('/api/clients', (req, res) => {
            business.addUser(req.body);
            res.status(200).send({status: 'ok'});
        })
        
        app.put('/api/clients/all', (req, res) => {
            const clientid = req.body;
            console.log(clientid);
            business.updateUser(req.body);
            res.status(200).send({status: 'ok'});
        })

        //lance l'ecoute
        app.listen(port, () => {
            console.log(`App listening on port ${port}`)
        }) 
    }

};

module.exports = apiServ;