// ./database/db.js
const { MongoClient } = require('mongodb');

const url = 'mongodb://localhost:27017';
const dbName = 'Mern';

async function connectToDatabase() {
    try {
        const client = new MongoClient(url);
        await client.connect();
        const db = client.
        console.log('Connected successfully to MongoDB server');
        return client.db(dbName);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
        throw error;
    }
}

module.exports = connectToDatabase;
