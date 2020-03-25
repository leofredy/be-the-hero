
exports.up = function(knex) {
  return knex.schema.createTable('incidents', function (table) {
      /*CAMPOS DA TABLE*/
      /*increment vai automáticamente incrementando o número do incidente*/
      table.increments();
      table.string('title').notNullable();
      table.string('description').notNullable();
      table.decimal('value').notNullable();
      

      /*RELACIONAMENTO*/
      table.string('ong_id').notNullable();

      /*
      CHAVE ESTRANGEIRA, PARA QUE TODA VEZ QUE O ID DO RELACIONAMENTO
      FOR PREENCHIDO, SEJA UM QUE ESTÁ CADASTRADO NA TABLE 'ongs'
      */
     table.foreign('ong_id').references('id').inTable('ongs');


  })
};

exports.down = function(knex) {
  
    return knex.schema.dropTable('incidents')
};
