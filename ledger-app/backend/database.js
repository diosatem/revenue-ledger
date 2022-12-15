const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

mongoose
  .connect(
    'mongodb+srv://diosa:6CvA4kxS50BF02rV@cluster0.cuersbo.mongodb.net/?retryWrites=true&w=majority')
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

module.exports = mongoose;