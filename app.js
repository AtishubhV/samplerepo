const express = require("express");
const port = 8083;
const app = express();
app.get("/products",  cors(), (req, resp) => {
    //resp.send("working");
    resp.json([{ "Name": "P1", "Age": "1", "Game": "X" }, { "Name": "P2", "Age": "2", "Game": "Y"}]);
  });
app.get("/",  cors(), (req, resp) => {
    //resp.send("working");
    resp.json([{ "Name": "Atishubh", "Age": "35", "Game": "Cricket" }, { "Name": "Mark", "Age": "32", "Game": "Football"}]);
  });

app.listen(port, console.log(`Server started at port ${port}`));
