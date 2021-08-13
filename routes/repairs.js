const express = require("express");
const Repair = require("../APIConnections/repairs");

const router = express.Router();

router.post('/', Repair.createRepair);
router.get('/', Repair.getRepairs);
router.get('/:id', Repair.getSpecRepairs);
router.patch('/:id', Repair.updateRepairs);
router.delete('/:id', Repair.deleteRepair);


module.exports=router;