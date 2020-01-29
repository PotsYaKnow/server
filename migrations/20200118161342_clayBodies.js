exports.up = function (knex) {
    return knex.schema
        .createTable('ClayBodies', function (table) {
            table.increments('id').primary()
            table.string('clayBody').unique()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('ClayBodies')
};
