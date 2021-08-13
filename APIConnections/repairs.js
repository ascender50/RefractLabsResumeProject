const express = require('express');
const Repair = require('../schemas/repairschema');
const mongoose= require('mongoose');
const router = express.Router();

const createRepair =  async (req, res) => {
    console.log(req.body);
        const newRepair = new Repair({
            customerID: req.body.customerID,
            scheduledDate:req.body.scheduledDate,
            itemCategory: req.body.itemCategory,
            issueDescription: req.body.issueDescription,
            repairNotes: req.body.repairNotes,
        })
      try{
          await newRepair.save();
          res.status(201).json(newRepair)
      }catch(error){
        res.status(400).json({ message : error.message});     
     }
    }
  const getRepairs = async (req, res) => {
    try {
        const repair= await Repair.find();
        
        res.status(200).json(repair);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}
const getSpecRepairs = async (req,res) => {
    const id = req.params.id;
    try {
        const rep = await Repair.findOne({id: id});
        res.status(200).json(rep);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}
const updateRepairs = async (req, res) => {
    const id= req.params.id;
    try{
        await Repair.findOneAndUpdate({
            id: id,
        },
        {   
            customerID: req.body.customerID,
            scheduledDate:req.body.scheduledDate,
            itemCategory: req.body.itemCategory,
            issueDescription: req.body.issueDescription,
            repairNotes: req.body.repairNotes,
        }
        )
        res.status(202).json({id: id});

    } catch (error) {
        res.status(401).json({message: error.message});
    }
}
const deleteRepair = async (req, res) => {
    const id= req.params.id;

    try {
        await Repair.findOneAndRemove({id: id});
        res.status(203).json({id:id});

    }catch(error) {
        res.status(402).json({message: error.message});
    }
}
    module.exports.createRepair = createRepair;
    module.exports.getSpecRepairs = getSpecRepairs;
    module.exports.getRepairs = getRepairs;
    module.exports.deleteRepair = deleteRepair;
    module.exports.updateRepairs = updateRepairs;