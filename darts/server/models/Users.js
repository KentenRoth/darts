const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

// Needs password hashing
// Needs stats connected to to each user

// For now main user adds friends
// Stats tracked through friends

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	// tokens: [
	// 	{
	// 		token: {
	// 			type: String,
	// 			required: true,
	// 		},
	// 	},
	// ],
	friends: [
		{
			friend: {
				name: {
					type: String,
					required: false,
				},
				stats: {
					high: {
						type: Number,
						required: true,
						default: 0,
					},
					out: {
						type: Number,
						required: true,
						default: 0,
					},
					bestSetAverage: {
						type: Number,
						required: true,
						default: 0,
					},
				},
			},
		},
	],
});

module.exports = User = mongoose.model('User', UserSchema);
