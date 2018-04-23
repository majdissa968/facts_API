const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const factsSchema = new mongoose.Schema({
	music: {
		type: String,
		trim: true
	},
	album: {
		type: String,
		trim: true
	},
	text: {
		type: String
	},
	created: {
		type: Date,
		default: Date.now
	},
	updated: {
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('Facts', factsSchema);
