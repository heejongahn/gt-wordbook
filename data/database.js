import Sequelize from 'sequelize';

const db = new Sequelize('db', null, null, {
  host: 'localhost',
  dialect: 'sqlite',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  storage: `${__dirname}/db.sqlite`
});

db.authenticate()
  .then((err) => {
    console.log('Connection has been established successfully.');
  }, (err) => {
    console.log('Unable to connect to the database:', err);
  });

const User = db.define('user', {
  username: {
    type: Sequelize.STRING,
    unique: true,
  }
});

User.sync({force: true}).then(() => {
  return User.create({
    username: 'Heejong Ahn'
  });
});

export { db, User };
