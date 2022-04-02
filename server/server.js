const app = require('./app');
const dotenv = require('dotenv');
const connectDatabase = require("./config/database");


//Handling Uncaught Exception
process.on("uncaughtException",(err) => {
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to Uncaught Exception`);
    process.exit(1);
})

// config 

dotenv.config({path:"server/config/config.env"});


//connecting to database

connectDatabase()



app.listen(process.env.PORT,() => {

    console.log(`process in running on port ${process.env.PORT}`)

});


//Unhandeled Promise Rejection
process.on("unhandledRejection", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Unhadeled Promise Rejection`);

    server.close(()=>{
        process.exit(1);
    })
})