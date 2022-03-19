const express = require('express');
const router = new express.Router();
const MongoClient = require('mongodb').MongoClient;
const auth = require('../middleware/auth');
const User = require('../models/User');
const Friends = require('../models/Friends');
const Stats = require('../models/Stats');

router.post('/users', async (req, res) => {
	const user = new User(req.body);
	try {
		await user.save();
		const authToken = await user.createAuthToken();
		await new Stats({
			owner: user._id,
		}).save();

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

router.get('/friendsRequest', auth, async (req, res) => {
	MongoClient.connect(process.env.MONGODB_URL, async (err, client) => {
		const db = client.db('darts-api');
		let myFriend = await db.collection('users').findOne({
			name: req.body.name,
		});
		let noDuplicates = await db
			.collection('friends')
			.find({
				request: req.user._id,
				recipient: myFriend._id,
			})
			.toArray();
		if (noDuplicates.length > 0) {
			return res.status(200).send('Has prior request');
		}

		const friend = new Friends({
			request: req.user._id,
			recipient: myFriend._id,
			status: 1,
		});
		try {
			await friend.save();
			res.status(200).send(friend);
		} catch (error) {
			res.status(400).send();
		}
	});
});

router.get('/users/me', auth, async (req, res) => {
	res.send(req.user);
});

module.exports = router;
