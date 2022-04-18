const express = require("express");
const cors = require('cors');
var mysql = require('mysql');
const app = express();

let sql;

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "example_db"
});
con.connect( function(err) {
  if (err) throw err;
});

 function haku(start,end){

   con.query("SELECT * FROM tapahtumat WHERE Date BETWEEN '" + start + "' AND '" + end + "'", function (err, result, fields) {
    if (err) throw err;
    sql = JSON.stringify(result);
    console.log(sql);
    console.log(result);
  });

}



app.use(cors());

app.get("/",(req,res) => {
  console.log("gfds");
  res.status(200).send(sql);
});
app.get('/:start/:end',(req,res) => {
  let s = req.params.start;
  let e = req.params.end;
  haku(s, e);
  console.log(sql);

  res.status(200).send(sql);
});

app.listen(8080);



