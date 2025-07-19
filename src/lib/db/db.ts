import mongoose from 'mongoose';
import { NODE_ENV } from '$env/static/private';
import { env } from '$env/dynamic/private';

const URI =
  NODE_ENV === 'production'
    ? env.DB_PROD_URI
    : NODE_ENV === 'development'
    ? env.DB_DEV_URI
    : env.DB_TEST_URI;

try {
  await mongoose.connect(URI);
  console.log('Connected successfully to database');
} catch (err) {
  console.log('Mongoose connection err: ' + err);
}

export default mongoose;
