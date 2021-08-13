var mongoose=require('mongoose');
 
var InventorySchema = new mongoose.Schema({
    itemName:{
        type:String,
required:true,
    },
    itemCategory:{
        type:String,
required:true,
    },
    listPrice:{
        type:Number,
required:true,
    },
    numinStock:{
type:Number,
required:true,
    } 
}, {timestamps:true});
 
var inventoryData=mongoose.model('inventoryData',InventorySchema);
module.exports = inventoryData;