const app = require('./app');
const dotenv = require('dotenv');
const path = require('path');
const connectDatabase = require('./Config/database');

// To make available the config.env file everywhere.
dotenv.config({path: path.join(__dirname,'./Config/config.env')}); 

connectDatabase();

app.listen(process.env.PORT,()=>{
    console.log(`Server is listening to the port: ${process.env.PORT}`);
});

