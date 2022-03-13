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
		enums: [
			0, // Ignore
			1, // Pending
			2, // Rejected
			3, // Accepted
		],
	},
});

module.exports = mongoose.model('Friends', FriendsSchema);
