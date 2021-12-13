const express = require("express")
const mongoose = require('mongoose');
const ejs = require('ejs')
mongoose.connect('mongo mongodb://172.21.2.236:27017/190110910309');
//mongoose.connect('mongo mongodb://localhost');
const schema={
    data1:String,
    data2:String
}

const Option = mongoose.model('Option', schema);

const app = express()
app.use('/',express.static('public'))
app.get("/input",(req,res)=>{
    const a = new Option({data1:String(req.query.op1),
        data2:String(req.query.op2)})
    console.log(typeof(String(req.query.op2)))
    console.log(String(req.query.op2))
    a.save()
    ejs.renderFile("result.html",{returnVal:"success"},(err,str)=>{
        res.send(str)
    })
    res.send(req.query)
    console.log(req.query)
})
app.listen(10309)