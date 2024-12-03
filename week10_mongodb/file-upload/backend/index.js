import express from 'express';
import cors from 'cors';
import fileUploader from './middleware/fileUploader.js';
import ErrorResponse from './utils/ErrorResponse.js';
import errorHandler from './middleware/errorHandler.js';

const app = express();
const port = process.env.PORT || 8080;

app.use(cors({ origin: '*' }));

app.use('/files', express.static('files'));

app.post('/file-upload', fileUploader.single('image'), (req, res) => {
    if (!req.file) throw new ErrorResponse('Please upload a file', 400);
    return res.status(200).json({
        location: `http://localhost:8080/files/${req.file.filename}`,
    });
    // return res.status(200).json({
    //     location: `${req.protocol}://${req.get('host')}/files/${
    //         req.file.filename
    //     }`,
    // });
});

app.use('/*', (req, res) => {
    throw new ErrorResponse('Not Found', 404);
});
app.use(errorHandler);

app.listen(port, () => console.log(`Server is running on port ${port}`));
