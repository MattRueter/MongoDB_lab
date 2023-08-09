const express = require("express");
const app = express();
const port = 3000;


app.get("/", (req, res) => {
    res.send("Hello MongoDB_lab")
});

app.post("/", (req,res) => {
    console.log("POST on route `/`");
    res.send("Posting on route `/`")
});

app.put("/", (req,res) => {
    console.log("PUT on route `/`");
    res.send("PUT on route `/`");
});

app.delete("/", (req,res) => {
    console.log("DELETE on route `/`");
    res.send("DELETE on route `/`")
});


app.listen(port, () => {
    console.log(`MongoDB_lab listening on port ${port}`);
});