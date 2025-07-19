import mongoose from 'mongoose';
import { NODE_ENV } from '$env/static/private';
import { DB_DEV_URI, DB_PROD_URI, DB_TEST_URI } from '$env/dynamic/private';

const URI =
  NODE_ENV === 'production' ? DB_PROD_URI : NODE_ENV === 'development' ? DB_DEV_URI : DB_TEST_URI;

try {
  await mongoose.connect(URI);
  console.log('Connected successfully to database');
} catch (err) {
  console.log('Mongoose connection err: ' + err);
}

export default mongoose;
