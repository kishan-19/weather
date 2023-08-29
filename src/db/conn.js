const mongoose = require('mongoose');
mongoose.connect(process.env.DETA_DB,{dbName:process.env.DB_NAME})


.then(()=>{
    console.log("Connect to weather db");
}).catch((error)=>{
    console.log(error);
})

module.exports =mongoose;