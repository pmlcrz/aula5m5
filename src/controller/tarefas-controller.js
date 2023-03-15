async function controlador() {
    const dados = await model.pegarDados()
    visualViewport,jogaNaTela(dados)
}

pegarDados() {
    const dados= acessabanco()
    return dados
}