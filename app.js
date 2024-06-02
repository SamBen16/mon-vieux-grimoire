const express = require('express');

const app = express();

app.use(express.json());

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

app.post('/api/auth/login', (req, res, next) => {
    console.log(req.body);
    res.status(200).json({
    message: 'login ok !'
    });
});

app.post('/api/auth/signup', (req, res, next) => {
    console.log(req.body);
    res.status(201).json({
    message: 'inscription ok !'
    });
});


app.get('/', (req, res) => {
  res.json({ message: 'bienvenue sur la page d accueil' });
});


app.use((req, res, next) => {
  console.log('Réponse envoyée avec succès !');
  next();
});


module.exports = app;
