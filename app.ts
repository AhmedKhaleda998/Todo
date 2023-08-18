import express from 'express';
import bodyParser from 'body-parser';

import todosRoutes from './routes/todos';

const app = express();

const PORT = 3000;

app.use(bodyParser.json());

app.use(todosRoutes);

app.listen(PORT, () => {
    console.log('Running on port', PORT);
});