const mongoose = require('mongoose');

let Revenue = mongoose.model('Revenue', {
    invoiceNumber: { type: Number },
    date: { type: String },
    particulars: { String },
    amount: { type: Number }
});

module.exports = { Revenue };