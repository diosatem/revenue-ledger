const express = require('express');
let router = express.Router();

let { Revenue } = require('../models/revenue');

//localhost:3000/revenues/
router.get('/', (req, res) => {
    Revenue.find((err, docs) => {
        if (!err) { res.send(docs); } else {
            console.log("Error in retrieving revenues")
        }
    });
});

router.post('/', (req, res) => {
    var rev = new Revenue(
        {
            invoiceNumber: req.body.invoiceNumber,
            date: req.body.date,
            particulars: req.body.particulars,
            amount: req.body.amount
        }
    );   
    emp.save((err, docs) => {
        if (!err) { res.send(docs); } else {
            console.log("Error in retrieving revenues")
        }
    });
});

module.exports = router;