const Joi = require('joi')

function loginSchema () {
    const schema = {
        username: Joi.string().regex(new RegExp('^[a-zA-Z0-9_]{4,32}$')),
        password: Joi.string().regex(
            new RegExp('^[a-zA-Z0-9_/*/$/#&]{8,32}$')
        )
    }
    return schema
}

function getErrorMessage (fieldName) {

    let error = {
        status: 400,
        msg: ''
    }

    switch (fieldName) {
        case 'username':
            error.msg = `That's not a valid username`
            break;
        case 'password':
            error.msg =
                `The password provided failed to match the following rules:
       <br>
       1. It must contain ONLY the following characters: lower case, upper case, numerics, or special characters( _,*,$,#,& )
       <br>
       2. It must be at least 8 characters in length and not greater than 32 characters in length.`
            break;
        default:
            error.msg =  'Invalid login information'

    }

    return error
}

module.exports = {
    loginValidation(req, res, next) {
        const { error, value } = Joi.validate(req.body, loginSchema())

        if (error) {
            let errorMsg = getErrorMessage(error.details[0].context.key)
            res.status(errorMsg.status).send(errorMsg.msg)
        } else {
            next()
        }
    }
}
