exports.up = function (knex) {
    return knex.schema
        .createTable('PotStatusUnderglazes', function (table) {
            table.increments('id').primary()

            table
                .string('color').unique()


            table
                .integer('potStatusId')
                .unsigned()
                .references('id')
                .inTable('potStatuses')
                .onDelete('CASCADE')
                .index()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('PotStatusUnderglazes')
};
