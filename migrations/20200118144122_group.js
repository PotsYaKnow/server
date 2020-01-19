
exports.up = function(knex) {
  return knex.schema
     .createTable('Groups', function(table){
       table.increments('id').primary()
       table.string('name').unique()
     })
};

exports.down = function(knex) {
return knex.schema
    .dropTableIfExists('Groups')
};
