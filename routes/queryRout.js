const express = require('express')
const app = express();
const router = express.Router();
const queryCOntroller = require('../controller/queryCOntroller')
router.get('/query')
router.get('/query', queryCOntroller.getQueryBody)
router.get('/signup', queryCOntroller.getQueryInfo)
module.exports = router