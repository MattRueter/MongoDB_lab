//This connects to a database (myLibrary in this case) and exports that DB for use in app and routes. That is all.
//interactions with db should happen on appropriate routes.
// use variables as this api will be able to point at other databases/collections in mongDB_lab

// this brings in dotenv and runs dotenv.config();
import "../loadEnvironment.mjs";
import { MongoClient } from "mongodb";

const connectionString = process.env.ATLAS_URI || "";
const client = new MongoClient(connectionString);


let conn;
try{
    conn = await client.connect();
}catch(e){
    console.log(e);
}

//assign the result of the async call to client.connect().db(<database>)
//the argument is the name of the database. This is now able to be imported throughout the app
// and consumed on routes.
let db = conn.db("myLibrary");

export default db;
