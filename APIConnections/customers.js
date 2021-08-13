const express = require('express');
const Customer = require('../schemas/customerschema');
const mongoose= require('mongoose');
const router = express.Router();

const createCustomer =  async (req, res) => {
    console.log(req.body);
        const newCustomer = new Customer({
       customerName: req.body.customerName,
       emailAddress: req.body.emailAddress,
       phoneNumber: req.body.phoneNumber,
        })
      try{
          await newCustomer.save();
          res.status(201).json(newCustomer)
      }catch(error){
        res.status(400).json({ message : error.message});     
     }
    }
  const getCustomer = async (req, res) => {
    try {
        const customer= await Customer.find();
        
        res.status(200).json(customer);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}
const getspecCustomer = async (req,res) => {
    try {
        const cust = await Customer.findById(req.params.id);
        res.status(200).json(cust);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}
const updateCustomer = async (req, res) => {
   
    try{
        await Customer.findByIdAndUpdate(
            req.params.id
        ,
        {   
        customerName: req.body.customerName,
        emailAddress: req.body.emailAddress,
        phoneNumber: req.body.phoneNumber,
        },
        {useFindAndModify : true, new:true}
        )
        res.status(202).json({message: `User Updated`});

    } catch (error) {
        res.status(401).json({message: error.message});
    }
}
const deleteCustomer = async (req, res) => {
    try {
        await Customer.findByIdAndDelete(req.params.id);
        res.status(203).json({message: `Deleted this user`});

    }catch(error) {
        res.status(402).json({message: error.message});
    }
}
    module.exports.createCustomer = createCustomer;
    module.exports.getspecCustomer = getspecCustomer;
    module.exports.getCustomer = getCustomer;
    module.exports.deleteCustomer = deleteCustomer;
    module.exports.updateCustomer = updateCustomer;