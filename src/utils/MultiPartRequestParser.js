const formidable = require('formidable');

const form = formidable({ multiples: true});

module.exports = {

        parse(req, res, next) {
            form.parse(req, (err, fields, files) => {
                    if (err) {
                        next(err);
                        return;
                    } else {
                        req.formFields = fields
                        req.uploadedFiles = files
                        next()
                    }
                })
            }
        }
