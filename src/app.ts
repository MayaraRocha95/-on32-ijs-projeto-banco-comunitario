import express from 'express';
import bodyParser from 'body-parser';
import { accountRouter } from './controllers/accountController';
import { clientRouter } from './controllers/clientController';

const app = express();
app.use(bodyParser.json());

app.use('/accounts', accountRouter);
app.use('/clients', clientRouter);

export default app;
