import express from 'express';
import { registerVendor, loginVendor, addService, getVendorServices } from '../controllers/vendor.controller.js';
import upload from '../configs/multer.config.js';
import { authorize } from '../middlewares/auth.js';

const router = express.Router();

router.post('/register', upload.single('file'), registerVendor);
router.post('/login', upload.none(), loginVendor);
router.post('/service', authorize, addService);
router.get('/service', authorize, getVendorServices);

export default router;
