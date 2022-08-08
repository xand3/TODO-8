const customExpress = require("./config/customExpress")
const conexao = require('./infra/connection')
const tabelas = require('./infra/tables')

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('Conectado com sucesso')

        tabelas.init(conexao)
        const app = customExpress()
        app.listen(3460, ()=> {
            console.log('servidor ativo')
        })
    }
})