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
    const id = req.params.id;
    try {
        const cust = await Customer.findOne({id: id});
        res.status(200).json(cust);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}
const updateCustomer = async (req, res) => {
    const id= req.params.id;
    try{
        await Customer.findOneAndUpdate({
            id: id,
        },
        {   
        customerName: req.body.customerName,
        emailAddress: req.body.emailAddress,
        phoneNumber: req.body.phoneNumber,
        }
        )
        res.status(202).json({id: id});

    } catch (error) {
        res.status(401).json({message: error.message});
    }
}
const deleteCustomer = async (req, res) => {
    const id= req.params.id;

    try {
        await Customer.findOneAndRemove({id: id});
        res.status(203).json({id:id});

    }catch(error) {
        res.status(402).json({message: error.message});
    }
}
    module.exports.createCustomer = createCustomer;
    module.exports.getspecCustomer = getspecCustomer;
    module.exports.getCustomer = getCustomer;
    module.exports.deleteCustomer = deleteCustomer;
    module.exports.updateCustomer = updateCustomer;