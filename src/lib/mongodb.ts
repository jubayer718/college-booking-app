import mongoose from "mongoose";


const connectDB = async() => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log('mongodb connected')
  } catch (error) {
    console.log('mongodb error',error);
  }
}

export default connectDB;