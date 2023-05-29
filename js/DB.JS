const { MongoClient } = require('mongodb')

let dbConnection

module.exports = {
 connectToDb: (cb) => {
   MongoClient.connect('mongodb://localhost:27017/MHEC')
    .then((client) =>   {
     dbConnection = client.db()
      return cb()
    })
    .catch(eer => {
        console.log(err)
        return cb(err)
    })
},
  getDB: () => dbConnection
}