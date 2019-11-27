const express = require("express")
const mongoose = require("mongoose")
const path = require("path")
const router = require("./routs")
const db = require("./config/db")
const PORT = require("./config/connection")
const bodyParser = require("body-parser")


const app = express()

app.use(express.urlencoded({
    extended: true
}))

app.use(express.static(path.join(__dirname, 'public')))

app.use(router)
app.set("view engine", "ejs")


async function entry() {
    try {
        mongoose.connect(db, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        })
        app.listen(PORT, () => {
            console.log(PORT);
            console.log("started...");
        })
    } catch (e) {
        console.error(e);
    }
}

entry()