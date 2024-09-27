// import './db/associations.js';
import express from 'express';
import cors from 'cors';

import ErrorResponse from './utils/ErrorResponse.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());
app.use(cors());

app.post('/file-upload', (req, res) => {
    res.status(201).json({ message: 'Sup, bruh?' });
});

app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
