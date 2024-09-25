// import './db/associations.js';
import express from 'express';
import cors from 'cors';

import errorHandler from './middleware/errorHandler.js';
import fileRouter from './routers/uploadRouter.js';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.use('/file-upload', fileRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
