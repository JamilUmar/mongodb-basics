var mongoClient = require('mongodb').MongoClient;

const createInterns = (db) => {
 var dbo = db.db('JamilUmar');
 dbo.createCollection('interns', (err, res) => { 
  if (err) throw err;
  console.log('Interns Collection Created');

  db.close();
 });
}


module.exports = createInterns;

