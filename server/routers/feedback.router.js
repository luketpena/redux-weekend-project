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
});

// Posts a new feedback to the database
router.post('/',(req,res)=>{
  console.log(req.body);
  const {feeling, understanding, support, comments} = req.body;

  let queryString = 'INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1,$2,$3,$4);';

  pool.query(queryString, [feeling, understanding, support, comments]).then(result=>{
    res.sendStatus(200);
  }).catch(error=>{
    res.sendStatus(400);
    console.log(error);    
  });
});

// Posts the new flagged status
router.put('/flag/:id',(req,res)=>{
  let id = req.params.id;
  let newVal = req.body.val.toString().toUpperCase();

  console.log('ID:',id,'New Value:',newVal);
  
  let queryString = 'UPDATE "feedback" SET "flagged" = $1 WHERE "id" = $2;'
  pool.query(queryString, [newVal, id]).then(result=>{
   
    res.sendStatus(200);
  }).catch(error=>{
    res.sendStatus(400);
    console.log(error);
  });
})



// EXPORT THE ROUTES
module.exports = router;