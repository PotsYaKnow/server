exports.up = function (knex) {
    return knex.schema
        .createTable('FiringTemps', function (table) {
            table.increments('id').primary()

            table
                .string('temperature').unique()

        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('FiringTemps')
};
