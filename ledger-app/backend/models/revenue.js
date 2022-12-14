const mongoose = require('mongoose');

const revenueSchema = mongoose.Schema({
    invoiceNumber: { type: Number },
    date: { type: String },
    particulars: { String },
    amount: { type: Number }
});

module.exports = mongoose.model('Revenue', revenueSchema);