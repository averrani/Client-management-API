const express = require('express');
const users = require('./users.json');

const app = express()
const port = 3001

//on recupere les donnees du users.json
app.get('/api', (req,res) => {    
  res.status(200).json(users)
});

// //req reprend les donnees fournies par la requete
// app.get('/public/:id', (req,res) => {    
//   //valeur de params.id est un string, on le transforme en number
//   const id = parseInt(req.params.id);    
//   const users = users.find(users => users.id === id);    
//   res.status(200).json(users);
// })

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})