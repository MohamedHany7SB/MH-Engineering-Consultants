const express = require('express')
const { ObjectId } = require('mongodb')
const { connectToDb, getDb} = require('./db')

// Init App & Middleware
const app = express()

// db connection
let db

connectToDb((eer)  => {
 if (!err) {
    app.listen(3000, () => {
        console.log('app listening on port 3000')
    })
    db = getDb()
 }
})

// routes
app.get('/Consultations', (req, res) => {
    let Consultations = []
 
    db.collection(Consultations)
    .find()
    .sort({ Engineer: 1 })
    .forEach(Consultation => Consultations.push(Consultation))
    .then(() => {
    res.status(200).json(Consultations)
})
.catch(() => {
    res.status(500).json({error: 'Could not fetch the documents'})
})
 })

 app.get('/Consultations/:id', (req,res) => {

    if (ObjectId.isVaild(req.params.id)) { 
     db.coollection("Consultations")
     .findOne({_id: ObjectId (req.params.id) })
     .then(doc => {
     res.status(200).json(doc)
  })
  .catch(err => {
    res.status(500).json({error: 'Could not fetch the documents'})
  })
 } else { 
   res.status(500).json({error: 'Not a vaild doc id'})
 }

 })   