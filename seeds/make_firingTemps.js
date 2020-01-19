exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('FiringTemps').del()
        .then(function () {
            // Inserts seed entries
            return knex('FiringTemps').insert([{
                    "temperature": "N/A"
                },
                {
                    "temperature": "High"
                },
                {
                    "temperature": "Mid"
                },
                {
                    "temperature": "Low"
                },
                {
                    "temperature": "△14"
                },
                {
                    "temperature": "△13"
                },
                {
                    "temperature": "△12"
                },
                {
                    "temperature": "△11"
                },
                {
                    "temperature": "△10"
                },
                {
                    "temperature": "△9"
                },
                {
                    "temperature": "△8"
                },
                {
                    "temperature": "△7"
                },
                {
                    "temperature": "△6"
                },
                {
                    "temperature": "△5"
                },
                {
                    "temperature": "△4"
                },
                {
                    "temperature": "△3"
                },
                {
                    "temperature": "△2"
                },
                {
                    "temperature": "△1"
                },
                {
                    "temperature": "△01"
                },
                {
                    "temperature": "△02"
                },
                {
                    "temperature": "△03"
                },
                {
                    "temperature": "△04"
                },
                {
                    "temperature": "△05"
                },
                {
                    "temperature": "△06"
                },
                {
                    "temperature": "△07"
                },
                {
                    "temperature": "△08"
                },
                {
                    "temperature": "△09"
                },
                {
                    "temperature": "△010"
                },
                {
                    "temperature": "△011"
                },
                {
                    "temperature": "△012"
                },
                {
                    "temperature": "△013"
                },
                {
                    "temperature": "△014"
                },
                {
                    "temperature": "△015"
                },
                {
                    "temperature": "△016"
                },
                {
                    "temperature": "△017"
                },
                {
                    "temperature": "△018"
                },
                {
                    "temperature": "△019"
                },
                {
                    "temperature": "△020"
                },
                {
                    "temperature": "△021"
                },
                {
                    "temperature": "△022"
                }
            ]);
        });
};
