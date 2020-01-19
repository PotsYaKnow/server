exports.up = function (knex) {
    return knex.schema
        .createTable('Users', function (table) {
            table.increments('id').primary()
            table.string('email').unique().notNullable();
            table.string('password').notNullable();

            table
                .integer('locationId')
                .unsigned()
                .references('id')
                .inTable('locations')
                .onDelete('SET NULL')
                .index()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('Users')
};
