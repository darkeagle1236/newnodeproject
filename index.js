var calculator = require('./calculator')
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log("Nhan mot GET Request ve Homepage")
    res.sendFile(__dirname+'/index.html')
})
app.get('/calculate',function (req,res) {
    let a = req.query.a;
    let b = req.query.b;
    res.send('Kết quả của bạn là : a + b = '+calculator.Addition(a,b)+', a - b = '+calculator.Subtraction(a,b)+', a * b = '+calculator.Multiplication(a,b)+', a / b = '+calculator.Division(a,b))
})
app.listen(8080)