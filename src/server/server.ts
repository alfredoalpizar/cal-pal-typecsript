import * as path from 'path';
import * as expressGraphQL from 'express-graphql';
import * as express from 'express';
import schema from './schema';


const app = express();

app.use('/dist', express.static('dist', { index: false }));
app.use('/graphql', expressGraphQL({
  graphiql: true,
  schema,
}));
app.get('/*', (req, res) => res.sendFile(path.resolve('dist', 'index.html')));

app.listen(3000, () => console.log('listening'));
