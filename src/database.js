const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
  host: 'data-avimo.cgriqmyweq5c.us-east-2.rds.amazonaws.com',
  user: 'testing',
  password: 'Pruebas%ALI%2020',
  database: 'testing_ali_fullstack'
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