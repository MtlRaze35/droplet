const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('saah dude!!!!')
})

app.listen(3000)