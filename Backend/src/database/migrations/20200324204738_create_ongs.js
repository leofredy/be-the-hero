/*METODO up É RESPONSAVEL PELA CRIAÇÃO DA TABELA.*/
exports.up = function(knex) {
    return knex.schema.createTable('ongs', function (table){
        table.string('id').primary();
        /*notNullable = para não ser vazias*/
        table.string('name').notNullable();
        table.string('email').notNullable();
        table.string('whatsapp').notNullable();
        table.string('city').notNullable();
        /*RECEBE APENAS 2 PARAMETROS PARA UF*/
        table.string('uf', 2).notNullable();
    })
};

/*CASO DE ALGUM PROBLEMA ESSE METODO VAI VOLTAR, NESSE CASO QUERO DELETAR A TABELA*/
exports.down = function(knex) {
  return knex.schema.dropTable('ongs');
};

/**COMANDOS - FONTE(http://knexjs.org/#Installation-migrations // foi pesquisado 'make:')
 * 
 * npx knex: mostra alguns comandos (rollback: desfazer a ultima migrates feita)
 * 
 * npx knex migrate:latest - Para fazer a criação da table que estão no metodo
 */
