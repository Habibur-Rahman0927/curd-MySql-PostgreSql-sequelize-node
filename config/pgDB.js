const Sequelize = require('sequelize');

const sequelize = new Sequelize('postgresql://postgres:asdf1234@localhost:5432/Post', {
  dialect: 'postgres',
  host: 'localhost'
});

const connection = async() => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully. Postgress');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
connection()
module.exports = sequelize