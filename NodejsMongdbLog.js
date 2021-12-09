const express = require("express")
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/test1');
const schema={
    data1:Number,
    data2:Number
}

const Option = mongoose.model('Option', schema);

const app = express()
app.use('/',express.static('public'))
app.get("/input",(req,res)=>{
    const a = new Option({data1:parseFloat(req.query.op1),
        data2:parseFloat(req.query.op2)})
    a.save()
    res.send(req.query)
    console.log(req.query)
})
app.listen(10309)