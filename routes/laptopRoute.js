var express = require("express"),
router= express.Router();
 laptopController = require("../controllers/laptopController");
lc = new laptopController;
router.get("/", lc.getAll.bind(lc));
router.post("/" ,lc.create.bind(lc));
router.put("/:id" , lc.update.bind(lc));
router.delete("/:id", lc.delete.bind(lc));
module.exports = router;