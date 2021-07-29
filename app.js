const express = require("express");
const port = 8083;
const app = express();
app.get("/", (req, resp) => {
    //resp.send("working");
    resp.json([{ "Name": "Atishubh", "Age": "35", "Game": "Cricket" }, { "Name": "Mark", "Age": "32", "Game": "Football"}]);
  });
app.get("/products", (req, resp) => {
    //resp.send("working");
    resp.json([{ "Name": "P1", "Age": "1", "Game": "X" }, { "Name": "P2", "Age": "2", "Game": "Y"}]);
  });
app.listen(port, console.log(`Server started at port ${port}`));
