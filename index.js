const {MongoClient} = require('mongodb');
const url = 'mongodb://127.0.0.1:27017';
const  database = 'e-comm';
const client = new MongoClient(url);

async function getData() {
    console.log("Start");
    let result = await client.connect();  
    console.log("after result");
    let db = result.db(database);  
    let collection = db.collection('products');
    let  response = await collection.find({}).toArray();
    console.log(response);
}
getData();