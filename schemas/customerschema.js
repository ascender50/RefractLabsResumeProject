var mongoose=require('mongoose');
 
var CustomerSchema = new mongoose.Schema({
    customerName:{
        type: String,
        required: true,
    },
    emailAddress:{
        type: String,
        required: true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
}, {timestamps:true});
 
var customerData=mongoose.model('customerData',CustomerSchema);
module.exports = customerData;