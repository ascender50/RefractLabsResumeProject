const db = require('../config/db.config')
const CustomerModel = require('../schemas/customerschema');

db.router.post('/customers', function(req, res) {
    var newCustomer = new CustomerModel();
       newCustomer.customerID = req.body.customerID;
       newCustomer.customerName = req.body.customerName;
       newCustomer.emailAddress = req.body.emailAddress;
       newCustomer.phoneNumber = req.body.phoneNumber;
       
       newCustomer.save(function(err, data){
           if(err){
               console.log(error);
           }
           else{
               res.send("Data inserted");
           }
       });
    });
    db.router.get('/customers/find', function(req, res) {
        CustomerModel.find(function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
            }
        });  
     });
     db.router.post('/customerss/:id', function(req, res) {
        CustomerModel.findOne((req.body.id), 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data Deleted!");
            }
        }); 
    });
    db.router.post('/customers/delete/:id', function(req, res) {
        CustomerModel.findByIdAndDelete((req.body.id), 
        function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data Deleted!");
            }
        });  
    });
    db.router.post('/customer/update/:id', function(req, res) {
        CustomerModel.findByIdAndUpdate(req.body.id, 
        {Name:req.body.Name}, function(err, data) {
            if(err){
                console.log(err);
            }
            else{
                res.send(data);
                console.log("Data updated!");
            }
        });  
    });