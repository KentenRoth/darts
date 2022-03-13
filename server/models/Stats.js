const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Need to attach stats to user

const StatsScheme = new Schema({
	high: {
		type: Number,
		required: true,
		default: 0,
		trim: true,
	},
	out: {
		type: Number,
		required: true,
		default: 0,
		trim: true,
	},
	bestSetAverage: {
		type: Number,
		required: true,
		default: 0,
		trim: true,
	},
	winLoss: {
		type: String,
		required: true,
		default: '0-0',
		trim: true,
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		requied: true,
		ref: 'User',
	},
});

module.exports = Stats = mongoose.model('Stats', StatsScheme);
