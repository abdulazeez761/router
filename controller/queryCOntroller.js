const { query } = require('express')
const queryCOntroller = require('../routes/queryRout')
exports.getQueryBody =(req, res)=>{
    res.render('../view/query')
} 
exports.getQueryInfo = (req , res)=>{
    let info = {
        username: req.query.username, email: req.query.email ,password: req.query.pass
       }

res.render('../view/account_info', {info:info})
}