const express = require('express');
const { MongoNetworkTimeoutError } = require('mongodb');
const router = new express.Router();
const User = require('../models/User');

router.post('/users', async (req, res) => {
	const user = new User(req.body);

	try {
		await user.save();
		const authToken = await user.createAuthToken();

		res.status(201).send({ user, authToken });
	} catch (error) {
		res.status(400).send(error);
	}
});

router.post('/users/login', async (req, res) => {
	try {
		const user = await User.findByCredentials(
			req.body.name,
			req.body.password
		);
		const authToken = await user.createAuthToken();
		res.send({ user, authToken });
	} catch (error) {
		res.status(400).send(error.message);
	}
});

module.exports = router;
