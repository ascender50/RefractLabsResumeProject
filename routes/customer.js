const express = require("express");
const customer = require("../APIConnections/customers");

const router = express.Router();

router.post('/', customer.createCustomer);
router.get('/', customer.getCustomer);
router.get('/:id', customer.getspecCustomer);
router.patch('/:id', customer.updateCustomer);
router.delete('/:id', customer.deleteCustomer);


module.exports=router;