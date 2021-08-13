const { MongoClient } = require('mongodb').MongoClient;
var mongoose = require('mongoose');

const uri = 'mongodb+srv://ascender50:jKrbP14ZIZJOmNy4' +'@refractlabsresumeprojec.wspxn.mongodb.net/BicycleShop?' + 'retryWrites=true&w=majority';
 
const db = (uri);
mongoose.Promise = global.Promise;
 
mongoose.connect(db, { useNewUrlParser : true,
useUnifiedTopology: true }, function(error) {
    if (error) {
        console.log("Error!" + error);
    }
});
 


