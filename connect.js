const { MongoClient } = require("mongodb");

const database = require("./.env");

const client = new MongoClient(database);


// The database to use
const dbName = "test";
async function run() {
    try {
        await client.connect();
        console.log("Connected correctly to server");
        const db = client.db(dbName);
        // Use the collection "people"
        const col = db.collection("people");
        // Construct a document                                                                                                                                                              
        let personDocument = {
            "name": "jack"
        }
        // Insert a single document, wait for promise so we can read it back
        const p = await col.insertOne(personDocument);
        // Find one document
        const myDoc = await col.findOne();
        // Print to the console
        console.log(myDoc);
    } catch (err) {
        console.log(err.stack);
    } finally {
        await client.close();
    }
}
run().catch(console.dir);



// let personDocument = {
//     "name": { "first": "Jack", "last": "Turing" },
//     "birth": new Date(1912, 5, 23), // June 23, 1912                                                                                                                                 
//     "death": new Date(1954, 5, 7), // June 7, 1954                                                                                                                                  
//     "contribs": ["Turing machine", "Turing test", "Turingery"],
//     "views": 1250000
// }


// // Check of connected to cluster0
// async function run() {
//     try {
//         await client.connect();
//         console.log("Connected correctly to server");
//     } catch (err) {
//         console.log(err.stack);
//     } finally {
//         await client.close();
//     }
// }
// run().catch(console.dir);