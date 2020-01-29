exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('ClayBodies').del()
        .then(function () {
            // Inserts seed entries
            return knex('ClayBodies').insert([{
                    "clayBody": "Earthenware"
                },
                {
                    "clayBody": "Earthenware - Throwing"
                },
                {
                    "clayBody": "Earthenware - Slipcasting"
                },
                {
                    "clayBody": "Earthenware - Sculpture"
                },
                {
                    "clayBody": "Earthenware - Hand-building"
                },
                {
                    "clayBody": "Earthenware - Salt"
                },
                {
                    "clayBody": "Earthenware - Raku"
                },
                {
                    "clayBody": "Stoneware"
                },
                {
                    "clayBody": "Stoneware - Throwing"
                },
                {
                    "clayBody": "Stoneware - Slipcasting"
                },
                {
                    "clayBody": "Stoneware - Sculpture"
                },
                {
                    "clayBody": "Stoneware - Hand - building"
                },
                {
                    "clayBody": "Stoneware - Salt"
                },
                {
                    "clayBody": "Stoneware - Raku"
                },
                {
                    "clayBody": "Porcelain"
                },
                {
                    "clayBody": "Porcelain - Throwing"
                },
                {
                    "clayBody": "Porcelain - Slipcasting"
                },
                {
                    "clayBody": "Porcelain - Sculpture"
                },
                {
                    "clayBody": "Porcelain - Hand - building"
                },
                {
                    "clayBody": "Porcelain - Salt"
                },
                {
                    "clayBody": "Porcelain - Raku"
                },
                {
                    "clayBody": "Flameware"
                },
                {
                    "clayBody": "Flameware - Throwing"
                },
                {
                    "clayBody": "Flameware - Slipcasting"
                },
                {
                    "clayBody": "Flameware - Sculpture"
                },
                {
                    "clayBody": "Flameware - Hand - building"
                },
                {
                    "clayBody": "Flameware - Salt"
                },
                {
                    "clayBody": "Flameware - Raku"
                }
            ]);
        });
};
