let express = require('express');
let app = express();
let port = 8230;


app.get('/', (req, res) => {
    res.send("Welcome to Indian Kefir company")
})

app.listen(port,() => {
    console.log("server is running on port")
})