//? Module for SQL
const mysql = require('mysql');
//?express  
const express = require('express')
const app = express()
app.use(express.json())
//? port if the conexion 
const port = 3000
//? uso cors
const cors = require('cors')
app.use(cors())
//? where is runing my server IN PORT 3000
const fileUpload = require('express-fileupload')
app.use(fileUpload());

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//? credentials y conexion a BD 
// var con = mysql.createConnection({
//   host : 'localhost',
//   user : 'root',
//   password : '',
//   database : 'intimo'
// });
// con.connect();
//? consultas a mi API

// ==================================================================================================================
 
app.get('/', (req, res) => {      
      
    res.send("pruba");
} )





{/* <img src="../assets/img/web/gallery/gallery-1.jpg" alt="" className="img-fluid"/>
                        
<img src="../assets/img/web/gallery/gallery-5.jpg" alt="" className="img-fluid"/>



<img src="../assets/img/web/gallery/gallery-6.jpg" alt="" className="img-fluid"/>



<img src="../assets/img/web/gallery/gallery-7.jpg" alt="" className="img-fluid"/> */}
