const express=require("express");
const path=require("path");
const app=express();
app.use(express.urlencoded({extended: true}))
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'html _files'));
app.use('/assets',express.static(path.join(__dirname , '/assets')))
const port = 5000;
const homePage = require('./routes/homeRout')
const filterPage = require('./routes/filtertRout')
const productPage = require('./routes/productRout')
const Bsign = require('./routes/bsignRout')
const querySign = require('./routes/queryRout')
app.use(homePage)
app.use(filterPage)
app.use(productPage)
app.use(Bsign)
app.use(querySign)
app.listen(port,()=>{
console.log(`listening on ${port} `)
})