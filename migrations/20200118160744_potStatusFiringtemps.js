exports.up = function (knex) {
    return knex.schema
        .createTable('PotStatusFiringTemps', function (table) {
            table.increments('id').primary()
            table
                .integer('potStatusId')
                .unsigned()
                .references('id')
                .inTable('potStatuses')
                .onDelete('CASCADE')
                .index()

            table
                .integer('firingTempId')
                .unsigned()
                .references('id')
                .inTable('firingTemps')
                .onDelete('CASCADE')
                .index()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('PotStatusFiringTemps')
};
