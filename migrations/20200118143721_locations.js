
exports.up = function(knex) {

  return knex.schema
     .createTable('Locations', function(table){
       table.increments('id').primary()
       table.string('country').unique()
     })

};

exports.down = function(knex) {
return knex.schema
    .dropTableIfExists('Locations')
};
