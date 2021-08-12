var mongoose=require('mongoose');
 
var CustomerSchema = new mongoose.Schema({
    customerID:Number,
    customerName:String,
    emailAddress:String,
    phoneNumber:Number,
}, {timestamps:true});
 
module.exports = mongoose.model(
    'customer', CustomerSchema, 'Customers');