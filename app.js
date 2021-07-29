const express = require("express");
const port = 8083;
const app = express();
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.get("/products",  cors(), (req, resp) => {
    //resp.send("working");
    resp.json([{ "Name": "P1", "Age": "1", "Game": "X" }, { "Name": "P2", "Age": "2", "Game": "Y"}]);
  });
app.get("/",  cors(), (req, resp) => {
    //resp.send("working");
    resp.json([{ "Name": "Atishubh", "Age": "35", "Game": "Cricket" }, { "Name": "Mark", "Age": "32", "Game": "Football"}]);
  });

app.listen(port, console.log(`Server started at port ${port}`));
