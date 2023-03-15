
    const //criou uma funcao
     usuarioController = (app) => {


    app.get('/usuarios', (req, res) => //sempre requisicao com resposta// 
    
    res.send("voce esta em usuarios"
    ))

    app.get('/usuarioscommaistarefas', (req, res) => 

    res.send("usuarios com mais tarefas na semana"
    ))
    }

    //mostrar na app.js

    export default usuarioController