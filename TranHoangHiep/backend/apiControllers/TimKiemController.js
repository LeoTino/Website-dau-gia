var express = require('express');
var sanPhamRepo = require('../repos/TimKiemRepo');
var router = express.Router();

router.get('/query/:query', (req, res) => {
    if (!req.params.query) {
        res.statusCode = 400;
        res.json('error');
    } else {
        var query = req.params.query;

        sanPhamRepo.loadKetQua(query).then(rows => {
            if (rows.length > 0) {
                res.json(rows);
            } else {
                res.statusCode = 204;
                res.end();
            }
        }).catch(err => {
            console.log(err);
            res.statusCode = 500;
            res.json('error');
        });
    }
});

module.exports = router;