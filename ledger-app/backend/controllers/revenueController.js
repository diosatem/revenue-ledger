const e = require('express');
const express = require('express');
// let router = express.Router();
let ObjectId = require('mongoose').Types.ObjectId;
const app = express();

let { Revenue } = require('../models/revenue');

//localhost:3000/revenues/
app.get('/api/revenues', (req, res) => {
    Revenue.find((err, docs) => {
        if (!err) { res.send(docs); } else {
            console.log("Error in retrieving revenues!")
        }
    });
});

app.get('/api/revenues/:id', (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: ${req.params.id}');
    Revenue.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else {
            console.log("Error in retrieving revenues!")
        }
    });
});

app.post('/api/revenues', (req, res, next) => {
    const rev = new Revenue(
        {
            invoiceNumber: req.body.invoiceNumber,
            date: req.body.date,
            particulars: req.body.particulars,
            amount: req.body.amount
        }
    );
    rev.save((err, docs) => {
        if (!err) { res.send(docs); } else {
            console.log("Error in retrieving revenues!")
        }
    });
});

app.put('/api/revenues/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: ${req.params.id}');

    let rev = {
        invoiceNumber: req.body.invoiceNumber,
        date: req.body.date,
        particulars: req.body.particulars,
        amount: req.body.amount
    };
    Revenue.findByIdAndUpdate(req.params.id, { $set: rev }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log("Update error!") }
    });
});

app.delete('/api/revenues/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send("No record with given id: ${req.params.id}");

    Revenue.findByIdAndRemove(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); }
        else { console.log("Delete error!") }
    })
});

module.exports = app;