const jwt = require('jsonwebtoken');
const User = require('../models/user');


async function authenticateAdmin(req, res, next) {
    try {
        const token = req.header('Authorization');
        const decodedToken = jwt.verify(token, process.env.SECURITY_KEY);
        const user = await User.findById(decodedToken.id);

        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        };
        if (user.privileges < 5) {
            return res.status(401).json({ message: 'No admin privileges' });
        }
        next();
    } catch(err) {
        console.error('Error occurred in admin authorization middleware', err.message);
        res.status(500).json({ error: 'An error occurred while authorizing' });
    };
};

module.exports = authenticateAdmin;