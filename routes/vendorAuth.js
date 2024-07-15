import express from 'express';
import { registerVendor } from '../controllers/vendor.controller.js';
import upload from '../configs/multer.config.js';

const router = express.Router();

router.post('/register', upload.single('file'), registerVendor);

export default router;
