const express = require('express');
const router = new express.Router();
const auth = require('../middleware/auth');
const Friends = require('../models/Friends');

// TODO
// If rejected removes request from server
// If accepted needs to update both users friends list - and remove request from server

router.patch('/friendsRequest/:id', auth, async (req, res) => {});

module.exports = router;
