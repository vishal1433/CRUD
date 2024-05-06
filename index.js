const express = require('express')
const app = express()
const mongoose = require('mongoose');


const router = require('./routes/product.routes');
app.use(express.json());

















app.use("/api/products",router)

app.listen(3000,()=>{
    console.log("Server is running at Port")
});

mongoose.connect("mongodb+srv://vishalmandal1433:ORljNP30fm0sRlfw@backenddb.srl1zko.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB")
.then(() => {
    console.log("Connected to db");
})
.catch(()=>{
    console.log("connection failed");
});