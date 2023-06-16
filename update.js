const dbConnect = require('./mongodb');

const updateData = async()=>{
    const db = await dbConnect();
    const result = await db.updateOne(
        {name:"max 4"},{$set:{price:550}}
    )
    console.log(result);
}
updateData();