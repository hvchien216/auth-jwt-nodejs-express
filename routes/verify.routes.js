const jwt = require('jsonwebtoken');

module.exports = function (req, res, next) {
    const bearerHeader = req.header('authorization');


    if (!bearerHeader) return res.status(401).send('Access deined Forbidden');

    try {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];

        const verified = jwt.verify(bearerToken, process.env.SECRET_KEY);
        console.log("hahah==>", verified);
        req.user = verified;
        next();
    } catch (err) {
        res.status(400).send('Invalid Token');
    }

}