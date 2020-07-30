const router = require('express').Router();



router.get("/", (req, res, next) => {
    res.send("hello");
})

router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    res.send(err);
});


module.exports = router