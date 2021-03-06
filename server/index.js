const express = require('express');

let app = express();
let port = process.env.PORT || 80;

app.use(express.static('/server'));

app.get('/', (req, res, next) => {
    console.log('you hitted me - 2'); // change this to see nodemon changes
    res.sendFile('index.html', { root: __dirname });
});

app.listen(port, () => {
    console.log(`Express server is listening on port: ${port}`);
});
