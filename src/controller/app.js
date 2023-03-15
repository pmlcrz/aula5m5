import express from "express";
import usuariocontroller from './controller/usuario-controller.js';

const app = express()

const port = 3000


usuariocontroller(app)

app.listen(port, () => {

  console.log('API up acesso em : localhost:${port}')

})