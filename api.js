const express = require('express');
const app = express();
const  dbConnect = require('./mongodb');

app.use(express.json());

app.get('/',async (req,res)=>{
    let data = await dbConnect();
    data = await  data.find().toArray();
    res.send(data)
})

app.post('/',async (req,res)=>{
    const db = await dbConnect();
    const result = await db.insertMany(
        [
            req.body
        ]
    )
    res.send(req.body)
})

app.listen(5000);