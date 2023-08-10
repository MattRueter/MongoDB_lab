//FIRST CONNECT TO DATABASE
import "./loadEnvironment.mjs";
import { MongoClient } from "mongodb";
const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);


let conn;
try{
    conn = await client.connect();
}catch(e){
    console.log(e);
}

let db = conn.db("myLibrary");

//ARRAY OF OBJECTS TO SEND INTO THE DB/COLLECTION:
const seeds =[];

//FUNCTION WHICH DOES THE SEEDING:
async function seedDB (seedArray) {
    let collection = await db.collection("authors");
    let result = await collection.insertMany(seedArray);

    console.log(result);
};

//function call below: Delete after use:!!!!! Or write / run delete script.!!!!!!!
