const express = require('express');
const bodyParser = require('body-parser')
const app =express();
const port=3000;

app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>')
})
app.get('/Home', function (req, res) {
    res.sendFile(__dirname+"/lol.html")
})
app.post('/user', function (req, res) {
    // let username = req.body.username;
    // let password = req.body.password;
    // res.send(username+password)
    res.sendFile(__dirname+"/user.html")

})
app.listen(3000,()=>{
    console.log(`listening on port ${port}`)
})
