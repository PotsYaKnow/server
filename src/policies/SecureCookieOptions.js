module.exports = {
     cookieOptions () {
        const expireDate = new Date()
        expireDate.setDate(expireDate.getDate() + 7);
        return { maxAge: 50000, httpOnly: true, domain:null, path: '/'  }
    }
}
