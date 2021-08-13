const express = require("express");
const mongoose = require("mongoose");
const customerRouter = require('./routes/customer');
const inventoryRouter = require('./routes/inventory')
const repairRouter = require('./routes/repairs')

const app = express();
const port = 4000;
const uri = 'mongodb+srv://ascender50:jKrbP14ZIZJOmNy4' +'@refractlabsresumeprojec.wspxn.mongodb.net/BicycleShop?' + 'retryWrites=true&w=majority';




mongoose.connect(uri,{useNewUrlParser: true} );
const con = mongoose.connection;
app.use(express.json());
try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

app.use('/customers', customerRouter);
app.use('/inventory', inventoryRouter);
app.use('/repairs', repairRouter);

app.listen(port, () => {
    console.log(`Server listening at ${port}`);
});