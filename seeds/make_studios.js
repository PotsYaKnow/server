exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('UserStudios').del()
        .then(function () {
            // Inserts seed entries
            return knex('UserStudios').insert([{
                    "userId": 1,
                    "name": "mugs"
                },
                {
                    "userId": 1,
                    "name": "planters"
                },
                {
                    "userId": 1,
                    "name": "jugs"
                }
            ]);
        });
};
