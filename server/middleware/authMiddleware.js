const jwt = require('jsonwebtoken');

const verifyJWT = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]; // Bearer <token>
        if (!token) {
            return res.status(401).json({ message: 'No token, authorization denied' });
        }

        // Verify token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded; 
        next();
    } catch (error) {
        res.status(401).json({ message: 'Token is not valid' });
    }
};

const signJWT = ({ _id, email, username }) => {
    const payload = { _id, email, username };
    return jwt.sign({ data: payload }, process.env.JWT_SECRET, { expiresIn: '2h' });
};

module.exports = { verifyJWT, signJWT };