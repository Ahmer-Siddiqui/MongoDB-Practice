const dbConnect = require('./mongodb'); 

const insert = async ()=>{
    const db = await dbConnect();
    const result = db.insertMany(
        [
            {name:'max 4', brand:'micromax',price:220,category:'mobile'}
        ]
    )
}

insert();