const express = require("express");
const router = express();

router.get('/', (req, res) => {
    res.send("<p>nice</p>")
});

module.exports = router;