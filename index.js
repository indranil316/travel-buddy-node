import express from 'express';
import bodyParser from 'body-parser';
import * as configs from './configs/env.config.js';
import mongoose from 'mongoose';
import vendorRoutes from './routes/vendor.js';
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

app.use('/api/vendor', vendorRoutes);

app.get('/', (req, res, next) => {
  res.send('hi');
  next();
});

app.listen(PORT, () => {
  console.log('server started at port ', PORT);
});
