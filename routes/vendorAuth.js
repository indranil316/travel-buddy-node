import express from 'express';
import { registerVendor, loginVendor } from '../controllers/vendor.controller.js';
import upload from '../configs/multer.config.js';

const router = express.Router();

router.post('/register', upload.single('file'), registerVendor);
router.post('/login', upload.none(), loginVendor);

export default router;
