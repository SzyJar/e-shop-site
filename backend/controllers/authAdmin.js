const User = require('../models/user');


async function authenticateAdmin(req, res, next) {
    try {
        const name = req.body.name;
        const user = await User.findOne({ name: name });
        if (!user) {
            return res.status(401).json({ message: 'Invalid credentials' });
        };
        if (user.privileges < 5) {
            return res.status(401).json({ message: 'No admin privileges' });
        }
    } catch(err) {
        console.error('Error occurred in admin authorization middleware', err.message);
        res.status(500).json({ error: 'An error occurred while authorizing' });
    };
};

module.exports = authenticateAdmin;