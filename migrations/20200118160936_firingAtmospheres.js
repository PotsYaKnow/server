exports.up = function (knex) {
    return knex.schema
        .createTable('FiringAtmospheres', function (table) {
            table.increments('id').primary()
            table.string('atmosphere').unique()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('FiringAtmospheres')
};
