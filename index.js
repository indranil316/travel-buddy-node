import express from 'express';
import bodyParser from 'body-parser';
import * as configs from './configs/env.config.js';
import mongoose from 'mongoose';
import vendorAuthRoutes from './routes/vendorAuth.js';
import upload from './configs/multer.config.js';
import cors from 'cors';

const PORT = configs.default.PORT || 5000;

const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/uploads', express.static('uploads'));

mongoose
  .connect(configs.default.MONGO_URI + '/' + configs.default.DB_NAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then((res) => {
    console.log('Database connected');
  })
  .catch((err) => {
    console.error('Cannot connect to DB');
    console.error(err);
    process.exit();
  });

app.use('/api/auth/vendor', vendorAuthRoutes);
app.post('/api/upload', upload.single('file'), (req, res) => {
  // Handle uploaded file here
  console.log('File uploaded:', req.file);
  // Return a response to confirm upload success
  res.json({ message: 'File uploaded successfully', file: req.file });
});

app.get('/', (req, res, next) => {
  res.send('hi');
  next();
});

app.listen(PORT, () => {
  console.log('server started at port ', PORT);
});
