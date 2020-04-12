const mongoClient = require('mongodb').MongoClient;
const createInterns = require('./interns');


uri = 'mongodb://localhost:27017/JamilUmar';
options = { useUnifiedTopology: true }

mongoClient.connect(uri, options, (err, db) => { 
 if (err) throw err;
 console.log('Database created by JamilUmar');
 createInterns(db);
});