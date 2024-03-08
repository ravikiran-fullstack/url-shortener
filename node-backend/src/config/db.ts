// Import the Mongoose library
import mongoose from 'mongoose';

// Create a connectDB function
export const connectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB: ', error);
  }
};

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function() {
  console.log('Connected to MongoDB event');
}); 

db.on('disconnected', function() {
  console.log('Disconnected from MongoDB');
});

process.on('SIGINT', function () {
  db.close(true); // Fix: Pass a boolean value as an argument to db.close()
  console.log(
    'Mongoose default connection is disconnected due to application termination'
  );
  process.exit(0);
});