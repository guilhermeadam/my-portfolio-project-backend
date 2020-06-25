const express = require('express');

app = express();

app.use('/', (request, response) => {
    response.send('My Portfolio is on! <3')
});

app.listen(3333);