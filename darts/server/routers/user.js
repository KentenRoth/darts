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

module.exports = router;
