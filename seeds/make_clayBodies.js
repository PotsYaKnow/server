exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('ClayBodies').del()
        .then(function () {
            // Inserts seed entries
            return knex('ClayBodies').insert([{
                    "clay": "Earthenware"
                },
                {
                    "clay": "Earthenware - Throwing"
                },
                {
                    "clay": "Earthenware - Slipcasting"
                },
                {
                    "clay": "Earthenware - Sculpture"
                },
                {
                    "clay": "Earthenware - Hand-building"
                },
                {
                    "clay": "Earthenware - Salt"
                },
                {
                    "clay": "Earthenware - Raku"
                },
                {
                    "clay": "Stoneware"
                },
                {
                    "clay": "Stoneware - Throwing"
                },
                {
                    "clay": "Stoneware - Slipcasting"
                },
                {
                    "clay": "Stoneware - Sculpture"
                },
                {
                    "clay": "Stoneware - Hand - building"
                },
                {
                    "clay": "Stoneware - Salt"
                },
                {
                    "clay": "Stoneware - Raku"
                },
                {
                    "clay": "Porcelain"
                },
                {
                    "clay": "Porcelain - Throwing"
                },
                {
                    "clay": "Porcelain - Slipcasting"
                },
                {
                    "clay": "Porcelain - Sculpture"
                },
                {
                    "clay": "Porcelain - Hand - building"
                },
                {
                    "clay": "Porcelain - Salt"
                },
                {
                    "clay": "Porcelain - Raku"
                },
                {
                    "clay": "Flameware"
                },
                {
                    "clay": "Flameware - Throwing"
                },
                {
                    "clay": "Flameware - Slipcasting"
                },
                {
                    "clay": "Flameware - Sculpture"
                },
                {
                    "clay": "Flameware - Hand - building"
                },
                {
                    "clay": "Flameware - Salt"
                },
                {
                    "clay": "Flameware - Raku"
                }
            ]);
        });
};
