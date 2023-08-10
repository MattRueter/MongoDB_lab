import express from "express";
import "./loadEnvironment.mjs"
import cors from "cors";
import db from "./db/conn.mjs";

const PORT = process.env.PORT;
const app = express();

//------------------------------------------------------------------------------------------------
//Current Database, collection, queries etc...
//These can be changed so api routes go to different DB/collections later for playing around
//but would normally be created and scoped within routes based on req.body, queries, params etc...

const myCollection = "authors";

const queries = {
    last_name:"last_name",
    first_name:"first_name",
}

const param = ["lastname"]

let newDocument = {
    last_name: "Marías",
    first_name: "Javier",
    languages: ["Spanish"]
}

//------------------------------------------------------------------------------------------------
//MIDDLEWARE:
app.use(cors());
app.use(express.json());


//ROUTES:
app.get("/", async (req, res) => {
    let collection = await db.collection("authors"); // "authors" will change to a variable.
    let result = await collection.find({}).toArray();
    console.log(result)

    res.send(result).status(200);
});

app.get(`/:${param[0]}`, async(req,res) => {
    let collection = await db.collection(myCollection);
    let query = {[queries.last_name]: req.params.lastname};
    let result = await collection.find(query).toArray();
    console.log(result)

    if(result.length <=0){
        res.send("Not Found.").status(404)
    }else{
        res.send(result).status(200);
    }
});



app.post("/", async(req,res) => {
    /*
    let collection = await db.collection(myCollection);
    let result = await collection.insertOne(newDocument);
    console.log(result)

    res.send(result).status(204);
    */
    res.status(503).send();
});

app.put("/", (req,res) => {
    console.log("PUT on route `/`");
    res.send("PUT on route `/`");
});

app.delete("/", (req,res) => {
    console.log("DELETE on route `/`");
    res.send("DELETE on route `/`")
});


app.listen(PORT, () => {
    console.log(`MongoDB_lab listening on port ${PORT}`);
});