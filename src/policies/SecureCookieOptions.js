module.exports = {
     cookieOptions () {
        const expireDate = new Date()
        expireDate.setDate(expireDate.getDate() + 7);
        return { expires: expireDate, httpOnly: true, secure: true, path: '' }
    }
}
