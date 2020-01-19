exports.up = function (knex) {
    return knex.schema
        .createTable('Slips', function (table) {
            table.increments('id').primary()

            table
                .string('slip').unique()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('Slips')
};
