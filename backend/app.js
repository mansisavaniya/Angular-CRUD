const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const app = express();
require('dotenv').config();

// Enable CORS for Angular frontend
app.use(cors({
  origin: 'http://localhost:4200', // Allow frontend to access backend
  methods: 'GET,POST,PUT,DELETE',
  credentials: true
}));

app.use(bodyParser.json());

// Database Connectivity
const dbconnect = require('./dbconfig/dbconnect');
dbconnect();

// Middleware
app.use(express.json());

// Default Route
app.get('/', (req, res) => {
    res.send("Welcome to the Product API!");
});

// Mount the Product Routes
const prdroute = require('./route/productroute');
app.use('/api/v1', prdroute);

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`REST API Server is running at http://localhost:${PORT}`);
});
