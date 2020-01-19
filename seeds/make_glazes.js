exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('Glazes').del()
        .then(function () {
            // Inserts seed entries
            return knex('Glazes').insert([{
                    "glaze": "N/A"
                },
                {
                    "glaze": "Clear"
                },
                {
                    "glaze": "White, Off-White"
                },
                {
                    "glaze": "Iron"
                },
                {
                    "glaze": "Iron - Celadon"
                },
                {
                    "glaze": "Iron - Celadon - Blue"
                },
                {
                    "glaze": "Iron - Celadon - Green"
                },
                {
                    "glaze": "Iron - Celadon - Yellow"
                },
                {
                    "glaze": "Iron - Celadon - Chun"
                },
                {
                    "glaze": "Iron - Amber"
                },
                {
                    "glaze": "Iron - Tenmoku"
                },
                {
                    "glaze": "Iron - Tenmoku - Tea Dust"
                },
                {
                    "glaze": "Iron - Tenmoku - Tessha, Hare's Fur"
                },
                {
                    "glaze": "Iron - Tenmoku - Kaki, Tomato Red"
                },
                {
                    "glaze": "Iron - Tenmoku - Oil Spot"
                },
                {
                    "glaze": "Iron - Slip-Based"
                },
                {
                    "glaze": "Shino"
                },
                {
                    "glaze": "Shino - Traditional"
                },
                {
                    "glaze": "Shino - Carbon Trap"
                },
                {
                    "glaze": "Shino - High-Alumina"
                },
                {
                    "glaze": "Shino - White"
                },
                {
                    "glaze": "Red"
                },
                {
                    "glaze": "Red - Copper"
                },
                {
                    "glaze": "Red - Copper - Oxblood"
                },
                {
                    "glaze": "Red - Copper - Flambe"
                },
                {
                    "glaze": "Red - Copper - Peach Bloom"
                },
                {
                    "glaze": "Red - Pink"
                },
                {
                    "glaze": "Red - Stain"
                },
                {
                    "glaze": "Green"
                },
                {
                    "glaze": "Green - Copper"
                },
                {
                    "glaze": "Green - Oribe"
                },
                {
                    "glaze": "Green - Chrome"
                },
                {
                    "glaze": "Green - Titanium"
                },
                {
                    "glaze": "Green - Nickel"
                },
                {
                    "glaze": "Green - Stain"
                },
                {
                    "glaze": "Turquoise"
                },
                {
                    "glaze": "Blue"
                },
                {
                    "glaze": "Blue - Cobalt"
                },
                {
                    "glaze": "Blue - Rutile"
                },
                {
                    "glaze": "Blue - Barium"
                },
                {
                    "glaze": "Blue - Strontium"
                },
                {
                    "glaze": "Blue - Nickel"
                },
                {
                    "glaze": "Blue - Stain"
                },
                {
                    "glaze": "Purple"
                },
                {
                    "glaze": "Purple - Magnesium Matte"
                },
                {
                    "glaze": "Purple - Nickel"
                },
                {
                    "glaze": "Purple - Manganese"
                },
                {
                    "glaze": "Matte"
                },
                {
                    "glaze": "Matte - Magnesium Matte"
                },
                {
                    "glaze": "Black"
                },
                {
                    "glaze": "Black - Slip-Based"
                },
                {
                    "glaze": "Black - Glossy"
                },
                {
                    "glaze": "Black - Satin"
                },
                {
                    "glaze": "Yellow"
                },
                {
                    "glaze": "Yellow - Iron"
                },
                {
                    "glaze": "Yellow - Barium"
                },
                {
                    "glaze": "Yellow - Manganese"
                },
                {
                    "glaze": "Yellow - Stain"
                },
                {
                    "glaze": "Yellow - Nickel"
                },
                {
                    "glaze": "Crystalline"
                },
                {
                    "glaze": "Crystalline - Micro"
                },
                {
                    "glaze": "Crystalline - Aventurine"
                },
                {
                    "glaze": "Crystalline - Manganese"
                },
                {
                    "glaze": "Crystalline - Macro"
                },
                {
                    "glaze": "Single-Fire"
                },
                {
                    "glaze": "Wood"
                },
                {
                    "glaze": "Salt And Soda"
                },
                {
                    "glaze": "Raku"
                },
                {
                    "glaze": "Ash"
                },
                {
                    "glaze": "Ash - Nuka"
                },
                {
                    "glaze": "Ash - Synthetic/Fake"
                },
                {
                    "glaze": "Ash - Slip-Based"
                },
                {
                    "glaze": "Majolica"
                },
                {
                    "glaze": "Bristol"
                },
                {
                    "glaze": "Specialty"
                },
                {
                    "glaze": "Specialty - Crackle"
                },
                {
                    "glaze": "Specialty - Crawling"
                },
                {
                    "glaze": "Specialty - Crater"
                },
                {
                    "glaze": "Specialty - Metallic"
                }
            ]);
        });
};
