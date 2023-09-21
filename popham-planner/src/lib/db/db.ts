import mongoose from 'mongoose';
import { DB_URI } from '$env/static/private';

try {
  await mongoose.connect(DB_URI);
  console.log('Connected successfully to database');
} catch (err) {
  console.log('Mongoose connection err: ' + err);
}

export default mongoose;

