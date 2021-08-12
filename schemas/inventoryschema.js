var mongoose=require('mongoose');
 
var InventorySchema = new mongoose.Schema({
    inventoryID:Number,
    itemName:String,
    itemCategory:String,
    listPrice:Number,
    numinStock: Number,
}, {timestamps:true});
 
module.exports = mongoose.model(
    'inventory', InventorySchema, 'Inventories');