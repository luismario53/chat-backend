const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'fullstack'
});

mysqlConnection.connect(error => {
  if(error){
    console.log(error);
    return;
  }else{
    console.log('DB is connected');
  }
});

module.exports = mysqlConnection;