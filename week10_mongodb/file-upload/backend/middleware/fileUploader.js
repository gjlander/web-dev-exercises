import multer from 'multer';

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './uploads'); // ->("./uploads")  this is the destination where files will save in the HArdDisk Storage
    },
    filename: (req, file, callback) => {
        callback(null, file.originalname);
    },
});

const fileUploader = multer({ storage });

export default fileUploader;
