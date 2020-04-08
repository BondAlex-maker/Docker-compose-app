require('./models');

const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send("hello from server!");
})

app.listen(3000, () => console.log('Listen on port 3000!'));
