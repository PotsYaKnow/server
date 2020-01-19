exports.up = function (knex) {
    return knex.schema
        .createTable('PotStatuses', function (table) {
            table.increments('id').primary()

            table
                .integer('statusId')
                .unsigned()
                .references('id')
                .inTable('statuses')
                .onDelete('CASCADE')
                .index()


            table
                .integer('potId')
                .unsigned()
                .references('id')
                .inTable('pots')
                .onDelete('CASCADE')
                .index()

            table.binary('picture')
            table.text('notes')
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('PotStatuses')
};
