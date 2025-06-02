import express from 'express';
import cors from 'cors';

import ErrorResponse from './utils/ErrorResponse.js';
import errorHandler from './middleware/errorHandler.js';
import fileUploader from './middleware/fileUploader.js';
import cloudUploader from './middleware/cloudUploader.js';
import RubberDuck from './models/RubberDuck.js';

const app = express();
const port = process.env.PORT || 8080;

app.use('/files', express.static('files'));

//prevents CORS error when working with frontend
app.use(cors());

app.post(
    '/file-upload',
    fileUploader.single('image'),
    cloudUploader,
    async (req, res) => {
        const newDuck = await RubberDuck.create({
            ...req.body,
            image: req.cloudinaryURL,
        });

        return res.status(200).json(newDuck);
    }
);

//will return a 404 if a request is sent to an endpoint we haven't created
app.use('/*', (req, res) => {
    throw new ErrorResponse('Not Found', 404);
});

//the entire application will use our custom errorHandler
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
