exports.up = function (knex) {
    return knex.schema
        .createTable('PotStatusGlazes', function (table) {
            table.increments('id').primary()
            table
                .integer('potStatusId')
                .unsigned()
                .references('id')
                .inTable('potStatuses')
                .onDelete('CASCADE')
                .index()

            table
                .integer('glazeId')
                .unsigned()
                .references('id')
                .inTable('glazes')
                .onDelete('CASCADE')
                .index()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('PotStatusGlazes')
};
