const express = require("express")
const app = express()
const studentroutes = require('./routes/students.routes')
const connectDB = require('./config/database.config')

//Function Call of Database
connectDB()


//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/api/students',studentroutes)

//Server Connection
app.listen(4000,()=>{
    console.log("Devansh Rajput, now you are connected to the server.")
})