const pool = require("../config/database"); // Importanto conexão do banco de dados
 
// Função que retorna todos os contatos
async function listarContatos() {
    const buscarContatos = await pool.query('SELECT * FROM contatos');
 
    return buscarContatos[0];
};
 
// Função que cria um novo contato
async function criarContato(nome, telefone) {
    const novocontato = await pool.query(`INSERT INTO contatos (nome, telefone) VALUES ('${nome}','${telefone}')`);
 
    return novocontato[0];
};
 
 
module.exports = {
    listarContatos,
    criarContato
}