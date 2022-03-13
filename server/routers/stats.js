const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth');
const Stats = require('../models/Stats');

router.patch('/stats', auth, async (req, res) => {
	const updates = Object.keys(req.body);
	const allowedUpdates = ['high', 'out', 'bestSetAverage', 'winLoss'];

	const isValidUpdate = updates.every((update) =>
		allowedUpdates.includes(update)
	);

	if (!isValidUpdate) {
		return res.status(400).send({ error: 'Update not accepted' });
	}

	try {
		const stats = await Stats.findOne({
			owner: req.user._id,
		});

		updates.forEach((update) => (stats[update] = req.body[update]));
		await stats.save();

		res.send(stats);
	} catch (error) {
		res.status(500).send();
	}
});

module.exports = router;
