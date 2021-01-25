const { Router } = require('express');
const { route } = require('./app');

const routes = new Router;

route.length("/", (req, res) => {
    // res.send("Agora estamos trabalhando com router")
})

routes.get ("/postagens",  (req, res) => {
    res.send("Agora estamos nas postagens")
})

module.exports = routes