// REQUIRES
const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// ROUTES

// Gets all of the feedback from the database
router.get('/',(req,res)=>{
  let queryString = 'SELECT * FROM feedback ORDER BY id';
  pool.query(queryString).then(result=>{
    res.send(result.rows);
  }).catch(error=>{
    console.log(error);
  });
})


// EXPORT THE ROUTES
module.exports = router;