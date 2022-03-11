const express = require('express');
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

router.post('/users/logout', auth, async (req, res) => {
	try {
		req.user.tokens = req.user.tokens.filter((token) => {
			return token.token !== req.token;
		});
		await req.user.save();

		res.send();
	} catch (error) {
		res.status(500).send();
	}
});

router.post('/users/logoutAll', auth, async (req, res) => {
	try {
		req.user.tokens = [];
		await req.user.save();
		res.send();
	} catch (error) {
		res.status(500).send();
	}
});

module.exports = router;
