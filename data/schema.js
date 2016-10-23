import {
  graphql,
  buildSchema,
} from 'graphql';

import { User } from './database';

const schema = buildSchema(`
    type User {
      id: ID
      username: String
    }

    type Query {
      me: User
      all: [User]
    }

    type Mutation {
      createUser(username: String): User
    }
  `);

const rootValue = {
  me() {
    return User.findOne({
      where: {
        username: 'Heejong Ahn'
      }}
    ).then(user => user);
  },
  all() {
    return User.findAll().
      then(users => users);
  },
  createUser({ username }) {
    return User.create({
        username
    }).
    then(user => user);
  }
}

export { schema, rootValue };
