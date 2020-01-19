exports.up = function(knex) {
  return knex.schema
     .createTable('Statuses', function(table){
       table.increments('id').primary()
       table.string('status').unique()
       table.comment('These statuses determine what state a pot is in')
     })
};

exports.down = function(knex) {
return knex.schema
    .dropTableIfExists('Statuses')
};
