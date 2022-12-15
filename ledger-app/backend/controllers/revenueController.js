const express = require('express');
const router = express.Router();
const ObjectId = require('mongoose').Types.ObjectId;
// const app = express();

const { Revenue } = require('../models/revenue');

router.post('/', (req, res, next) => {
    const rev = new Revenue(
        {
            invoiceNumber: req.body.invoiceNumber,
            date: req.body.date,
            particulars: req.body.particulars,
            amount: req.body.amount
        }
    );   
    
    rev.save().then(createdRevenue => {
        res.status(201).json({
            message: "Entry successfully added!",
            invoiceId: createdRevenue._id
        })
    });
});

router.get('/', (req, res, next) => {
    Revenue.find().then(documents => {
        console.log(documents);
        res.status(200).json({
            message: "Entries fetched successfully!",
            posts: documents
        });
    });
});

router.get('/:id', (req, res, next) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send('No record with given id: ${req.params.id}');
    Revenue.findById(req.params.id, (err, doc) => {
        if (!err) { res.send(doc); } else {
            console.log("Error in retrieving revenues!")
        }
    });
});

router.put('/:id', (req, res) => {
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

router.delete('/:id', (req, res) => {
    Revenue.deleteOne({ _id: req.params.id }).then(result => {
        console.log(result);
        res.status(200).json({ message: "Entry successfully deleted!" });
      });

    // if (!ObjectId.isValid(req.params.id))
    //     return res.status(400).send("No record with given id: ${req.params.id}");

    // Revenue.findByIdAndRemove(req.params.id, (err, doc) => {
    //     if (!err) { res.send(doc); }
    //     else { console.log("Delete error!") }
    // })
});

module.exports = router;