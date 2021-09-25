const express = require("express");
const app = express();
const mysql=require("mysql");
const cors=require("cors")

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'db1'
  });

app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.post("/api/insert", (req, res) => {

    connection.connect();
    const courseName=req.body.courseName;
    const courseReview=req.body.courseReview;
    
const sqlInsert="insert into db1.courses(course_name,review) values(?,?);";
connection.query(sqlInsert,[courseName,courseReview],(err,result)=>{
console.log(res);
});
connection.end();
});


app.listen(3001, () => {
    console.log("server running");
});