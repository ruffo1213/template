//enportando o pool de conexao com o banco de dados
const pool = require('../config/database');


// Função que retorna todos os itens armazenados
async function listItems() {
  const buscarItems = await pool.query('select * from items')

  //retornar a lista de itens para o controlador
  return buscarItems[0];
};



// Função que cria um novo item e o adiciona à lista
async function createItem(name) {

  

// add novo items a lista
const newItem =  await pool.query(`insert into items (name) values ('${name}')`)

return newItem[0]

};


module.exports = {
  listItems,
  createItem,
}
