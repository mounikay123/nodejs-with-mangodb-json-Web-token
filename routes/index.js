var express = require("express"),
router = express.Router();
router.use("/laptops", require("../routes/laptopRoute"));
module.exports = router;