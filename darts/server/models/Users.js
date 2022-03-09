const mongoose = require('mongoose');
// const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

// TODO
// Needs password hashing
// Needs stats connected to to each user
// Needs way to send friend request.
// Needs authtoken
// Need to attach user to stats

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
				token: {
					type: String,
					required: true,
				},
			},
		},
	],
});

UserSchema.pre('save', async function (next) {
	const user = this;

	if (user.isModified('password')) {
		user.password = await bcrypt.hash(user.password, 8);
	}

	next();
});

module.exports = User = mongoose.model('User', UserSchema);
