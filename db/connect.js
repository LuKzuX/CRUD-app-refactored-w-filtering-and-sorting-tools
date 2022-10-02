const mongoose = require(`mongoose`);

const connectDB = (url) => {
  return mongoose.connect(url); //this method returns a promise 
};

module.exports = connectDB;
