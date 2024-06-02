const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
  });
  
app.use((req, res, next) => {
  console.log('Requête reçue !');
  next();
});

app.get('/', (req, res) => {
  res.json({ message: 'bienvenue sur la page d accueil' });
});

app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
  next();
});


module.exports = app;
