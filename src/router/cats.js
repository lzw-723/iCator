const express = require('express');
const router = express.Router();

const db = require('../database');

const struct = require('../model/struct');
const cat = require('../model/cat');

router.get('/cats', async function (req, res) {
    res.status(200).json(struct.putData(await db.cat.all()));
})

router.get('/cats/:cid', async function (req, res) {
    res.status(200).json(struct.putData(await db.cat.findOne({ cid: req.params.cid})));
})

module.exports = router;