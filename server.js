import Koa from 'koa';
import send from 'koa-send';
import serve from 'koa-static';
import logger from 'koa-logger';
import mount from 'koa-mount';
import graphqlHTTP from 'koa-graphql';

import { schema, rootValue } from './data/schema';

const app = Koa();

app.use(logger());
app.use(serve(`${__dirname}/public`));

app.use(mount('/graphql', graphqlHTTP({
  schema,
  rootValue,
  graphiql: true
})));

app.use(function* index() {
  yield send(this, './index.html');
})

app.listen(3000);
