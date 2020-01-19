exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('Statuses').del()
        .then(function () {
            // Inserts seed entries
            return knex('Statuses').insert([{
                    "status": "Building/Throwing"
                },
                {
                    "status": "Drying"
                },
                {
                    "status": "Leather Hard"
                },
                {
                    "status": "Greenware"
                },
                {
                    "status": "Bisqued"
                },
                {
                    "status": "Glazed"
                },
                {
                    "status": "Complete"
                }
            ]);
        });
};
