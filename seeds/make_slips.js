exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('Slips').del()
        .then(function () {
            // Inserts seed entries
            return knex('Slips').insert([{
                    "slip": "N/A"
                },
                {
                    "slip": "Slip"
                },
                {
                    "slip": "Terra Sigillata"
                }
            ]);
        });
};
