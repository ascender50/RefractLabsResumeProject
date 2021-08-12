const { MongoClient } = require('mongodb');

async function main(){
const uri = "mongodb+srv://ascender50:<Boss5234#$>@refractlabsresumeprojec.wspxn.mongodb.net/RefractLabsResumeProject?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
try {
    await client.connect();
} finally{
    await client.close();
}
}
main().catch(console.error);