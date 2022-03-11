const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Schema = mongoose.Schema;

// TODO
// Needs stats connected to to each user
// Needs way to send friend request.

const UserSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	password: {
		type: String,
		required: true,
	},
	tokens: [
		{
			token: {
				type: String,
				required: true,
			},
		},
	],
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

UserSchema.methods.createAuthToken = async function () {
	const user = this;
	const token = jwt.sign(
		{ _id: user._id.toString() },
		process.env.HIDDEN_SENTENCE
	);

	user.tokens = user.tokens.concat({ token });
	await user.save();

	return token;
};

UserSchema.statics.findByCredentials = async (name, password) => {
	const user = await User.findOne({ name });

	if (!user) {
		throw new Error('Please Check Login Information');
	}

	const isMatch = await bcrypt.compare(password, user.password);

	if (!isMatch) {
		throw new Error('Please Check Login Information');
	}

	return user;
};

UserSchema.pre('save', async function (next) {
	const user = this;

	if (user.isModified('password')) {
		user.password = await bcrypt.hash(user.password, 8);
	}

	next();
});

module.exports = User = mongoose.model('User', UserSchema);