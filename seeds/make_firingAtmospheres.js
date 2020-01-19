exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('FiringAtmospheres').del()
        .then(function () {
            // Inserts seed entries
            return knex('FiringAtmospheres').insert([{
                    "atmosphere": "N/A"
                },
                {
                    "atmosphere": "Oxidation"
                },
                {
                    "atmosphere": "Neutral"
                },
                {
                    "atmosphere": "Reduction"
                },
                {
                    "atmosphere": "Salt and Soda"
                },
                {
                    "atmosphere": "Wood"
                },
                {
                    "atmosphere": "Raku"
                },
                {
                    "atmosphere": "Luster"
                }
            ]);
        });
};
