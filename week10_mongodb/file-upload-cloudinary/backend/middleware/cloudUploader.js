import { Buffer } from 'node:buffer';
import { v2 as cloudinary } from 'cloudinary';
import ErrorResponse from '../utils/ErrorResponse.js';

// Configuration
cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
    secure_url: true,
});

// 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='

// Upload an image
const cloudUploader = async (req, res, next) => {
    try {
        if (!req.file) throw new ErrorResponse('Please upload a file.', 400);

        const b64 = Buffer.from(req.file.buffer).toString('base64');
        const dataURI = 'data:' + req.file.mimetype + ';base64,' + b64;

        const cloudinaryData = await cloudinary.uploader.upload(dataURI, {
            resource_type: 'auto',
        });

        // console.log(cloudinaryData);

        req.cloudinaryURL = cloudinaryData.secure_url;

        next();
    } catch (error) {
        next(error);
    }
};

export default cloudUploader;
