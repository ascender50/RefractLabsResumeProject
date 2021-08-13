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
    try {
        const rep = await Repair.findById(req.params.id);
        res.status(200).json(rep);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}
const updateRepairs = async (req, res) => {
    try{
        await Repair.findByIdAndUpdate(req.params.id,
        {   
            customerID: req.body.customerID,
            scheduledDate:req.body.scheduledDate,
            itemCategory: req.body.itemCategory,
            issueDescription: req.body.issueDescription,
            repairNotes: req.body.repairNotes,
        },
        {useFindAndModify : true, new:true}
        )
        res.status(202).json({message: `Updated User`});

    } catch (error) {
        res.status(401).json({message: error.message});
    }
}
const deleteRepair = async (req, res) => {
    try {
        await Repair.findByIdAndDelete(req.params.id);
        res.status(203).json({message: `Deleted User`});

    }catch(error) {
        res.status(402).json({message: error.message});
    }
}
    module.exports.createRepair = createRepair;
    module.exports.getSpecRepairs = getSpecRepairs;
    module.exports.getRepairs = getRepairs;
    module.exports.deleteRepair = deleteRepair;
    module.exports.updateRepairs = updateRepairs;