var mongoose = require('mongoose');

const ResponseSchema = new mongoose.Schema({
    name: String,
    phoneNumber: String,
	interest: String,
	date: {
		type: Date, 
		default: Date.now
	}
});

module.exports = mongoose.model("Response", ResponseSchema); 
