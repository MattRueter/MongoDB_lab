import express from "express";
//import "..loadEnvironment.mjs/"
import db from "../db/conn.mjs";
import { queryType } from "../query_functions/queryTypes.mjs";


const authorRouter = express.Router();
const myCollection = "authors"; 
const { queryDB } = queryType

//READ:
//get all authors.
authorRouter.get("/allAuthors", async (req,res) => {
    const query = {}
    const result = await queryDB(query, myCollection);

    res.send(result).status(200);
});

//get author by last name:
authorRouter.get("/:lastname", async(req,res) => {
    let query = { last_name: req.params.lastname};
    const result = await queryDB(query, myCollection);

    if(result.length <=0){
        res.send("Not Found.").status(404)
    }else{
        res.send(result).status(200);
    }
});

//add author
authorRouter.post("/:newDocument", async(req,res) => {
    let newDocument = {
        last_name: req.query.lastname,
        first_name: req.query.firstname,
        languages: [req.query.languages]
    }
    
    let collection = await db.collection(myCollection);
    let result = await collection.insertOne(newDocument);
    console.log(result)

    res.send(result).status(204);
});

export default authorRouter;