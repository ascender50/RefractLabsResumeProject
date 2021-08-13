const express = require('express');
const Inventory = require('../schemas/inventoryschema');
const mongoose= require('mongoose');
const router = express.Router();

const createInventory =  async (req, res) => {
    console.log(req.body);
        const newInventory = new Inventory({
       itemName: req.body.itemName,
       itemCategory: req.body.itemCategory,
       listPrice: req.body.listPrice,
       numinStock: req.body.numinStock,
        })
      try{
          await newInventory.save();
          res.status(201).json(newInventory)
      }catch(error){
        res.status(400).json({ message : error.message});     
     }
    }
  const getInventory = async (req, res) => {
    try {
        const inventory= await Inventory.find();
        
        res.status(200).json(inventory);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}
const getspecInventory = async (req,res) => {
    const id = req.params.id;
    try {
        const inv = await Inventory.findOne({id: id});
        res.status(200).json(inv);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}
const updateInventory = async (req, res) => {
    const id= req.params.id;
    try{
        await Inventory.findOneAndUpdate({
            id: id,
        },
        {   
        itemName: req.body.itemName,
        itemCategory: req.body.itemCategory,
        listPrice: req.body.listPrice,
        numinStock: req.body.numinStock,
        }
        )
        res.status(202).json({id: id});

    } catch (error) {
        res.status(401).json({message: error.message});
    }
}
const deleteInventory = async (req, res) => {
    const id= req.params.id;

    try {
        await Inventory.findOneAndRemove({id: id});
        res.status(203).json({id:id});

    }catch(error) {
        res.status(402).json({message: error.message});
    }
}
    module.exports.createInventory = createInventory;
    module.exports.getspecInventory = getspecInventory;
    module.exports.getInventory = getInventory;
    module.exports.deleteInventory = deleteInventory;
    module.exports.updateInventory = updateInventory;