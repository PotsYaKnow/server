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
                    "status": "Leather-Hard"
                },
                {
                    "status": "Greenware"
                },
                {
                    "status": "Bisque Firing"
                },
                {
                    "status", "Bisque Ware"
                },
                {
                    "status": "Glazing"
                },
                {
                    "status": "Glaze Firing"
                },
                {
                    "status", "Glaze Ware"
                }
                {
                    "status": "Complete"
                }
            ]);
        });
};
