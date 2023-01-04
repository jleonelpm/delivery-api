require('dotenv').config();

const db = require("mongoose");

//Parametro de configuracion requerido
db.set("strictQuery", false);

db.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connected to the database!")
}).catch(err => {
    console.log("Cannot connect the database!", err)
    // exit out so we don't see all those errors!
    process.exit()
})

module.exports = db;