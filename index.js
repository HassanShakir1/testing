const express = require("express");

const app = express();
app.get('/', (req, res)=>{
    res.send('hi')
})
app.listen('2000', ()=>{
    console.log('app is listening')
})