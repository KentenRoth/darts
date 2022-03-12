const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FriendsSchema = new Schema({
	request: {
		type: Schema.Types.ObjectId,
		ref: 'Users',
	},
	recipient: {
		type: Schema.Types.ObjectId,
		ref: 'Users',
	},
	status: {
		type: Number,
		enums: [0, 1, 2, 3],
	},
});

module.exports = mongoose.model('Friends', FriendsSchema);
