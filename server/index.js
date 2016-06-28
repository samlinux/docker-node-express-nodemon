const express = require('express');

let app = express();

app.use(express.static('/server'));
app.get('/', (req, res, next) => {
	console.log("you hitted me - 3");
	res.sendFile('index.html', { root: __dirname });
});

app.listen(80, () => {
	console.log("Express server is listening on port: 4000");
});
