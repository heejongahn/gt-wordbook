import Sequelize from 'sequelize';

const db = new Sequelize(`sqlite:///${__dirname}/db.sqlite`, {});

const User = db.define('user', {
  username: {
    type: Sequelize.STRING
  }
});

User.sync({force: true}).then(() => {
  return User.create({
    username: 'Heejong Ahn'
  });
});

export { db, User };
