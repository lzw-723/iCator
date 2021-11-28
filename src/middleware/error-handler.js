const util = require('util');
const struct = require('../model/struct');
module.exports = () => {
    return (err,req,res,next) => {
        console.error('error handled: %s', err.message);
        res.status(500).json(struct.newStruct(500, 'Internal Server Error.', err));
    }
}