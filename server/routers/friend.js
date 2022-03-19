const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth');
const Friends = require('../models/Friends');

// TODO
// If rejected removes request from server
// If accepted needs to update both users friends list - and remove request from server

router.post('/friendsRequest/:id,:status', auth, async (req, res) => {
	try {
		const request = await Friends.findOne({
			_id: req.params.id,
		});
		if (!request) return res.status(404).send();
		if (parseInt(req.params.status) != request.status) {
			request.status = parseInt(req.params.status);
			request.save();
		}
		res.send(request);
	} catch (error) {
		res.status(500).send(error);
	}
});

module.exports = router;
