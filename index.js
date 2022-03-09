const express = require('express');
require('./mongoose');
require('dotenv').config();
const app = express();
const port = process.env.PORT;
const userRouter = require('./darts/server/routers/user');

app.use(function (req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header(
		'Access-Control-Allow-Methods',
		'GET,HEAD,OPTIONS,POST,PUT,PATCH,DELETE'
	);
	res.header(
		'Access-Control-Allow-Headers',
		'Origin, X-Requested-With, Content-Type, Accept, Authorization'
	);
	next();
});

app.use(express.json());
app.use(userRouter);

app.listen(port, () => {
	console.log(`Server up on ${port}`);
});
