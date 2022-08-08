const Dica = require('../models/dicas')

module.exports = app => {
    app.get('/tips', (req, res) => {
        Dica.buscaDica(res)
    })


    app.post('/create', (req, res) => {
        const dica = req.body

        Dica.adiciona(dica, res)
    })
}