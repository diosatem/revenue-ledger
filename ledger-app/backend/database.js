
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);




// mongoose.connect('mongodb://localhost:27017/revenue-ledger', (err) => {
//     if (!err) {
//         console.log('MongoDB connection succeeded.')
//     } else {
//         console.log('There is an error in MongoDB connection: ' + JSON.stringify(err, undefined, 2));
//     }
// });

mongoose
  .connect(
    'mongodb://localhost:27017/revenueLedger'
  )
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
  });

 


module.exports = mongoose;