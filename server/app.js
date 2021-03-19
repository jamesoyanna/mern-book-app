const express = require('express');
const connectDB = require('./config/db')
const app = express();

// Connect Database
connectDB();

app.get('/', (req, res) =>

res.send("Hellod world my people, how are you doing"));

const port  = process.env.PORT || 2000;

app.listen(port, () => console.log(`Server running on port ${port}`))