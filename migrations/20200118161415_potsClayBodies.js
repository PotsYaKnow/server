exports.up = function (knex) {
    return knex.schema
        .createTable('PotsClayBodies', function (table) {
            table.increments('id').primary()
            table
                .integer('potId')
                .unsigned()
                .references('id')
                .inTable('Pots')
                .onDelete('CASCADE')
                .index()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('PotsClayBodies')
};
