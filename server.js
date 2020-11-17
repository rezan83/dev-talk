const express = require('express')
const connectDB = require('./config/db')

const app = express()
connectDB()

app.get('/', (req,res)=> res.send("hello") )

app.use("/api/users", require("./routes/api/users"));

const PORT = process.env.PORT|| 4000

app.listen(PORT, ()=>console.log(`app running on port: ${PORT}`))