exports.up = function (knex) {
    return knex.schema
        .createTable('UserStudios', function (table) {
            table.increments('id').primary()

            table
                .integer('userId')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .index()

            table.string('name')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('UserStudios')
};
