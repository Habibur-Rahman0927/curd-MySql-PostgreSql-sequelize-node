// const mysql = require('mysql2')

// const pool = mysql.createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'habib',
//     password:'asdf1234',
//   });

// module.exports = pool.promise();

// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'asdf1234';

const Sequelize = require('sequelize');

const sequelize = new Sequelize('Posts', 'root', 'asdf1234', {
  dialect: 'mysql',
  host: 'localhost'
});

const connection = async() => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully. mysql');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
connection()
module.exports = sequelize