const conexao = require('../infra/connection')

class Dica {
    buscaDica(res) {
        const sql = 'SELECT * FROM dicas ORDER BY RAND() LIMIT 1'

        conexao.query(sql, (erro, resultados) => {
            const dica = resultados[0]
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(dica)
            }
        })
    }

    adiciona(dica, res) {

        const sql = 'INSERT INTO dicas SET ?'
        conexao.query(sql, dica, (erro, resultados) => {
            if(erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(dica)
            }
        })
    }
}

module.exports = new Dica()