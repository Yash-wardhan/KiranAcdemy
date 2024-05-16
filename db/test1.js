const db = require('./database/db');

async function insert() {
    try {
        const dbConnect = await db();
        const collection = dbConnect.collection('Product'); // Assuming 'Product' is the name of your collection
        await collection.insertMany([
            { name: "chair", brand: "Nikle", price: 500 },
            { name: "chair1", brand: "Nikle kiran", price: 434 }
        ]);
        console.log("Docs created");
    } catch (error) {
        console.error("Error inserting documents:", error);
    }
}

insert();
