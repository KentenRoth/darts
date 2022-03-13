const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// TODO
// Future Games [cricket/cut-throat, 121, 6-11-bull, 100]
// Getting last 10 set averages (for possible bot down the road)

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
	wins: {
		type: Number,
		required: true,
		default: 0,
		trim: true,
	},
	gamesPlayed: {
		type: Number,
		required: true,
		default: 0,
		trim: true,
	},
	owner: {
		type: mongoose.Schema.Types.ObjectId,
		requied: true,
		ref: 'User',
	},
});

module.exports = Stats = mongoose.model('Stats', StatsScheme);
