import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLList
} from 'graphql';

import { db, User } from './database';

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'world';
        }
      },
      me: {
        type: GraphQLString,
        resolve() {
          return User.findAll().then(users => users[0].username);
        }
      },
      all: {
        type: new GraphQLList(GraphQLString),
        resolve() {
          return User.findAll().then(users => users.map(u=>u.username));
        }
      }
    }
  }),
  mutation: new GraphQLObjectType({
    name: 'RootMutationType',
    fields: {
      createHajin: {
        type: GraphQLString,
        resolve() {
          return User.create({
              username: 'Hajin Shim'
          }).
          then(user => user);
        }
      }
    }
  })
});

export default schema;
