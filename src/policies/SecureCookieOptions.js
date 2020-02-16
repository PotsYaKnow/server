module.exports = {
     cookieOptions () {
        const expireDate = new Date()
        expireDate.setDate(expireDate.getDate() + 7);
        return { httpOnly: true, domain:'potsyaknow-server.herokuapp.com', path: '/'  }
    }
}
