const { MongoClient } = require('mongodb');
// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = "Mern";

function main() {
  // Use connect method to connect to the server
  client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('Product');
  console.log('collection created success')
  return 'done.';
}
main()
  .then(console.log('prefect'))
  .catch(console.error);