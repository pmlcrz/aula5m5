import usuarioController from "./tarefa-controller";

function rotas(app) {
    
    app.get('/entidadetarefa', function (req, res) {
    res.send("faculdade, preparar marmita, judô")
  })
}

export default tarefaController