const express = require('express');
const cors = require('cors');
const routes = require('./routes');


const app = express();

/*Define qual site frontend pode acessar o banco de dados, como esta comentados, qualquer um pode*/
app.use(cors(/*{ origin: wwww.exemplo.com}*/));
/**
 * express vai converter a requisição em json
 */
app.use(express.json());

/**
 *
 *Rotas e recursos
 */

/*
 * Métodos HTTP
 * 
 * GET: Buscar uma informaçõa do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

 /**
  * Tipos de parâmetros:
  * 
  * Query: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
  * **ex: http://localhost:3333/users?page=2&name=Diego&Idade=25
  * 
  * Route Params: Parâmetros utilizados para identificar recursos
  * **ex:users/1 (users/:id)
  * 
  * Request Body: Corpo da requisição
  */

  /**
   *  SQL: MySql, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
   *  NoSQL: MongoDB, CouchDB, etc
   */

/**NECESSÁRIO INSTALAR O KNEX - SQLite
 * Driver: SELECT * FROM users
 * Query Builder: table('users').select('*').where()
 */
//Escreve hello word na página padrão (' / ')
//app.get('/', (request, response) => {return response.send('Hello World')});

app.use(routes);
app.listen(3333);