const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://ascender50:<Boss5234#$>@refractlabsresumeprojec.wspxn.mongodb.net/RefractLabsResumeProject?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  client.close();
});