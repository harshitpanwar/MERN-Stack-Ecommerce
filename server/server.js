const app = require('./app');
const dotenv = require('dotenv');



// config 

dotenv.config({path:"server/config/config.env"});





app.listen(process.env.PORT,() => {

    console.log(`process in running on port ${process.env.PORT}`)

})