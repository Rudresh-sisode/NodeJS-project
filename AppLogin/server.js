const app = require('./app');
const express = require('express');
const port = process.env.PORT || 3000;
const bodyParser =  require('body-parser');
const session = require('express-session');

app.use(express.static(__dirname+'/public'));
//unsecure
app.use(session({secret: 'edurekaSecert'}));

app.set('view engine', 'ejs');
app.set('views', './views');//html view setting

let sess;

app.get('/',(req,res) => {
    sess=req.session;//read use session object from request object
    sess.email=" "
    console.log(">>>>",sess.email);
    res.render('index',{error: req.query.valid?req.query.valid:'',
                        msg: req.query.msg?req.query.msg:''})
})

app.get('/signup',(req,res) => {
  res.render('signup')
})

const server = app.listen(port, () => {
  console.log('Express server listening on port ' + port);
});