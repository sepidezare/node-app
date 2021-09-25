var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'password',
  database : 'db1'
});
 
connection.connect();

//connection.query('insert into db1.courses(course_name,review) values("cc","good movie")', function (error, results) {
  
    connection.query('delete from db1.courses where course_id=1', function (error, results) {

if (error) throw error;
  
});
 
connection.end();