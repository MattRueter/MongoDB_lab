import db from "../db/conn.mjs";

//generic find query 
// "query" query argument is defined on the route which calls query functions

//FIND:
async function queryDB (query, currentCollection){
    let collection = await db.collection(currentCollection);
    let result = await collection.find(query).toArray();
    console.log(result)
    return result
}
//FIND and SORT:
async function queryDB_sort(query, currentCollection, sortCriteria){
    let collection = await db.collection(currentCollection);
    let result = await collection.find(query).sort(sortCriteria).toArray();
    console.log(result)
    return result
}

export const queryType = { queryDB, queryDB_sort }