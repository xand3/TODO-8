class tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarDica()
    }

    criarDica() {
        const sql = 'CREATE TABLE IF NOT EXISTS dicas(id int NOT NULL AUTO_INCREMENT, area varchar(50) NOT NULL, descricao varchar(200) NOT NULL, PRIMARY KEY(id))'  
        
        this.conexao.query(sql, (erro) => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('tabela dicas criada com sucesso')
            }
        })
    }
}

module.exports = new tabelas