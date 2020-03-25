/*ESSE ARQUIVO FAZ A CONEXÃO COM O BANCO DE DADOS*/

const knex = require('knex');
const configuration = require('../../knexfile');

/*VAI SER PASSADO A CONFIGURAÇÃO DE CONEXAO DE DESENVOLVIDOR LA DO ARQUIVO knexfile.js*/
const connection = knex(configuration.development);

/*VAMOS EXPORTAR A CONEXAO COM O BANCO DE DADOS*/
module.exports = connection;