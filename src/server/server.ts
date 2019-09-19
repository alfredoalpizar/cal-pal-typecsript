import * as path from 'path';
import * as expressGraphQL from 'express-graphql';
import * as express from 'express';
import * as session from 'express-session';
import schema from './schema';


const app = express();

app.use('/dist', express.static('dist', { index: false }));
app.use('/graphql', expressGraphQL({
  graphiql: true,
  schema,
}));
app.use(session({
  name: 'qid',
  secret: 'banana hammock',
  resave: false,
  saveUninitialized: false,
  cookie: {
    httpOnly: true,
    secure: false,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
}));
app.post('/login');
app.get('/*', (req, res) => res.sendFile(path.resolve('dist', 'index.html')));

app.listen(3000, () => console.log('listening'));
