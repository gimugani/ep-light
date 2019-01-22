const express = require('express'), 
      app     = express(),
      bodyParser = require('body-parser'),
      cors = require('cors'),
      morgan = require('morgan'), 
      mongoose = require('mongoose'),
      config = require('./src/config/config');

//require routes
var responseRoutes = require('./src/routes/response');

//connect to MongoDB database
// var uri = process.env.DATABASEURL || "mongodb://localhost/eplight";
var uri = process.env.MONGODB_URI || "mongodb://localhost/eplight";
mongoose.set('useCreateIndex', true)
mongoose.connect(uri, { useNewUrlParser: true })
		.then(() => console.log('MongoDB Connected...'))
        .catch(err => console.log(err)); 
        
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cors());

// app.use("/",  indexRoutes);
app.use("/responses",  responseRoutes);

app.listen(config.port, function(){
	console.log(`Server started on port ${config.port}`);
}); 
