exports.up = function (knex) {
    return knex.schema
        .createTable('PotStatusFiringAtmospheres', function (table) {
            table.increments('id').primary()
            table
                .integer('potStatusId')
                .unsigned()
                .references('id')
                .inTable('potStatuses')
                .onDelete('CASCADE')
                .index()

            table
                .integer('firingAtmosphereId')
                .unsigned()
                .references('id')
                .inTable('firingAtmospheres')
                .onDelete('CASCADE')
                .index()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('PotStatusFiringAtmospheres')
};
