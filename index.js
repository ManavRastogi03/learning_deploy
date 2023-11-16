require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/twitter',(req,res)=>{
    res.send("Hello..! Manav_Rastogi")
})
app.get('/login',(req,res)=>{
    res.send('<h1>Manav_Rastogi..!LoginThis page</h1>')
})
app.get('/youtube',(req,res)=>{
    res.send("<h3>Manav Rastogi Is on Youtube</h3>")
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})