const express = require('express');
const app = express();
const  dbConnect = require('./mongodb');
const  mongodb = require('mongodb')

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

app.put("/:name",async(req,res)=>{
    const data  = await dbConnect();
    const result = await data.updateMany(
        {name:req.params.name},{$set:req.body}
    )
    console.log(result);
    res.send(req.body)
})

app.delete("/:id",async(req,res)=>{
    const data = await dbConnect();
    const result =  await data.deleteOne({_id: new mongodb.ObjectId(req.params.id)});
    console.log(result);
    res.send("done")
})

app.listen(5000);