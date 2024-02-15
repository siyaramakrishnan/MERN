const mongoose = require('mongoose');

const connectDatabase = ()=> {
    mongoose.connect(process.env.DB_URL).then(()=>{
    console.log("Database is connected")
    }).catch((err)=>{
        console.log(err)
    })
};

module.exports = connectDatabase;
