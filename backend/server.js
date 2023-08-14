require('dotenv').config();
const express = require('express');
const jwt = require('jsonwebtoken');
const http = require('http');
const bodyParser = require('body-parser');
const cors = require('cors');


const PORT = process.env.PORT || 5000;
const SECRET_KEY = process.env.SECURITY_KEY;

const app = express();

app.use(cors({
    origin: ['https://szyjar.github.io', 'http://localhost:8080'],
    credentials: true,
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));