import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config()



const connectMongoDB = async() => {
    await mongoose.connect(process.env.MONGODB_CONNECTION, { useNewUrlParser: true })
    .then(() => console.log("connect success"))
  .catch((err) => console.error(err));
}

export {connectMongoDB}