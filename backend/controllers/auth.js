const jwt = require('jsonwebtoken');

async function authenticateJWT(req, res, next) {
    try {
        const token = req.header('Authorization');
  
        if (!token) {
          return res.status(401).json({ message: 'Authentication required' });
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