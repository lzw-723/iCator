const express = require('express')

const router = express.Router()

// 相关路由
router.get('/', (req, res) => {
        let links = {
        };
        res.send(links);
    });
router.use(require('./cats'))

module.exports = router