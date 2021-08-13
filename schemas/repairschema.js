var mongoose=require('mongoose');
 
var RepairSchema = new mongoose.Schema({
    customerID:{
        type:Number,
        required:true,
    },
    scheduledDate:{
        type:Date,
        required:true,
    },
    itemCategory:{
        type:String,
        required:true,
    },
    issueDescription:{
        type:String,
        required:true,
    },
    repairNotes:{ String,
    },
}, {timestamps:true});
 
var repairData=mongoose.model('repairData',RepairSchema);
module.exports = repairData;