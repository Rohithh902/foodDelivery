import mongoose from 'mongoose'

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://rohit:123456789qwertyuio@cluster0.izqvv9x.mongodb.net/food-del').then(() => console.log("MongoDB Connected!"))
    .catch(err => console.log("MongoDB Connection Error:", err));
}