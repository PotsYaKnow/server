exports.up = function (knex) {
    return knex.schema
        .createTable('GroupMembers', function (table) {
            table.increments('id').primary()

            table
                .integer('groupId')
                .unsigned()
                .references('id')
                .inTable('groups')
                .onDelete('CASCADE')
                .index()

            table
                .integer('userId')
                .unsigned()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')
                .index()
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists('GroupMembers')
};
