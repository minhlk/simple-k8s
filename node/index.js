const express = require('express')
const mysql = require('mysql2');

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const con = mysql.createConnection({
    host: "mysql-service",
    user: "root",
    password: "password",
    port: '3306'
  });

  let message = '';
  con.connect(function(err) {
    if (err) {
      console.log(err);
      message = err;
      res.send('DB Connected status is failed ')
    } else {
      message = "Connected!"
      console.log(message);
      res.send('DB Connected status is Connected')
    }
  });

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




