const express=require('express')
const app=express();
const port=process.env.port || 4040
app.use(express.static('public'))





app.listen(port,'localhost', ()=>console.log(` Server listening to requests on ${port}`)) 
