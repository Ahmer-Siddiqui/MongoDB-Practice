const dbConnect = require('./mongodb')

//By promises
// dbConnect().then((resp)=>{
//     resp.find().toArray().then((data)=>{
//         console.log(data);
//     })
// })


//By async await
const main = async ()=>{
let data = await dbConnect();
    data = await data.find().toArray();
    console.log(data);
}
main();