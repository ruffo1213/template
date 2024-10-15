const contatoModel = require('../models/contato.model');
 
 
 async function receberContatos(req, res) {
  const contatos = await contatoModel.listarContatos();
  res.json(contatos);
}
 
 
 async function criarContato(req, res) {
  const { nome, telefone} = req.body;
 
  if (!nome) {
    return res.status(400).json({ message: 'Nome é obrigatório' });
  }
 
  if (!telefone) {
    return res.status(400).json({ message: 'Contato é obrigatório' });
  }
 
  const novoContato = await contatoModel.criarContato(nome, telefone);
  
  res.status(201).json(novoContato);
}

module.exports = {
  receberContatos,
  criarContato,
}
