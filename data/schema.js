import {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
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
      }
    }
  })
});

export default schema;
