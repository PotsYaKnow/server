exports.up = function (knex) {
    return knex.schema
        .createTable('Pots', function (table) {
            table.increments('id').primary()

            table
                .integer('userStudioId')
                .unsigned()
                .references('id')
                .inTable('userStudios')
                .onDelete('CASCADE')
                .index()

            table.string('name')
            table.boolean('public').defaultTo(false);
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('Pots')
};
