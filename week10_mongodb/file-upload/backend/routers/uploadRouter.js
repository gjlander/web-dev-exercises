import { Router } from 'express';
import fileUploader from '../middleware/fileUploader.js';

import { uploadFile } from '../controllers/uploads.js';

const uploadRouter = Router();

uploadRouter.route('/').post(fileUploader, uploadFile);

export default uploadRouter;
