var mongoose=require('mongoose');
 
var RepairSchema = new mongoose.Schema({
    repairID:Number,
    customerID:Number,
    scheduledDate:Date,
    itemCategory:String,
    issueDescription:String,
    repairNotes: String,
}, {timestamps:true});
 
module.exports = mongoose.model(
    'repair', RepairSchema, 'repairs');