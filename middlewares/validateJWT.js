const jwt = require('jsonwebtoken');

const validateJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(' ')[1];
    if (token == null) return res.status(401).json({ message: 'Token not found' });
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) res.status(401).send({ auth: false, message: err });
        req.email = decoded.email;
        next();
    });
};

module.exports = validateJWT;