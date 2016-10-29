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
      user(id: ID): User
      all: [User]
    }

    type Mutation {
      createUser(username: String): User
    }
  `);

const rootValue = {
  user({ id }) {
    return User.findOne({
      where: { id }
    }).then(user => user);
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
