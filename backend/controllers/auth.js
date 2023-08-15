const jwt = require('jsonwebtoken');
const Token = require('../models/jwt');


async function authenticateJWT(req, res, next) {
    try {
        const token = req.header('Authorization');
  
        if (!token) {
          return res.status(401).json({ message: 'Authentication required' });
        };

        if (await Token.findOne({ token: token })) {
          return res.status(401).json({ message: 'The provided token has been invalidated' })
        };
      
        await jwt.verify(token, process.env.SECURITY_KEY, (error, decodedToken) => {
          if (error) {
            return res.status(401).json({ message: 'Invalid token' });
          };
      
          req.userId = decodedToken.userId;
          next();
        });
    } catch(err) {
        console.error('Error occurred in authorization middleware', err.message);
        res.status(500).json({ error: 'An error occurred while authorizing' });
    };
};

module.exports = authenticateJWT;