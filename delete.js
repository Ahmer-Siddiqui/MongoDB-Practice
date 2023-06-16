const dbConnect = require('./mongodb');

const deleteData =async ()=>{
    const data = await dbConnect();
    const result = await data.deleteOne({name:"max 3"});
    console.log(result);
}

deleteData();