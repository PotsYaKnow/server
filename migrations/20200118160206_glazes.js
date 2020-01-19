exports.up = function (knex) {
    return knex.schema
        .createTable('Glazes', function (table) {
            table.increments('id').primary()

            table
                .string('glaze').unique()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('Glazes')
};
