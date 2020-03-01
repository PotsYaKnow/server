const JWT = require('../policies/JWT')


module.exports = {
    async verifyCookie (req, res, next) {

        if(req.cookies.auth_token)
        {
          try
          {
           let userJwt= await JWT.verifyUser(req.cookies.auth_token)

          let user =  {'id': userJwt.sub, 'userName': userJwt.name}
          req.user = user
           next()
          }
          catch(err)
          {
            console.log(err)
          }

        }

//redirect to login page if doesn't have a valid cookie
        //res.redirect('/Login');




    },
}
