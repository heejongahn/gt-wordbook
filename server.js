import Koa from 'koa';
import send from 'koa-send';
import serve from 'koa-static';
import logger from 'koa-logger';

const app = Koa();

app.use(logger());
app.use(serve(`${__dirname}/public`));

app.use(function* index() {
  yield send(this, './index.html');
})

app.listen(3000);
