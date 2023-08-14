require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');

const apiRoutes = require('./routes/api.js');


const PORT = process.env.PORT || 5000;

const app = express();

app.use(
    helmet.contentSecurityPolicy(),
    helmet.referrerPolicy({ policy: 'strict-origin-when-cross-origin' }),
    helmet.xssFilter(),
    helmet.frameguard({ action: 'deny' }),
    helmet.hsts({ maxAge: 31536000, includeSubDomains: true }),
    helmet.hidePoweredBy()
);

app.use(cors({
    origin: ['https://szyjar.github.io', 'http://localhost:8080'],
    credentials: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routing
apiRoutes(app);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));