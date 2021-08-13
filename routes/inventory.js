const express = require("express");
const inventory = require("../APIConnections/inventory");

const router = express.Router();

router.post('/', inventory.createInventory);
router.get('/', inventory.getInventory);
router.get('/:id', inventory.getspecInventory);
router.put('/:id', inventory.updateInventory);
router.delete('/:id', inventory.deleteInventory);


module.exports=router;