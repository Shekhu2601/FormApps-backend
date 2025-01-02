
const jwt = require('jsonwebtoken');
const ensureAuthenticated = (req, res, next) => {
    const auth = req.headers['authorization'];
    if (!auth) {
        return res.status(403)
            .json({ message: 'Unauthorized, JWT token is require' });
    }
    try {
        const decoded = jwt.verify(auth, "shekhu");
        req.user =decoded.id;
        next();
    } catch (err) {
        return res.status(403)
        console.log(err)
            .json({ message: 'Unauthorized, JWT token wrong or expired' });
           
    }
}

module.exports = ensureAuthenticated;