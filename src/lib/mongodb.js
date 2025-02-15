import mongoose from "mongoose";

export async function Connect(){
    try {
        mongoose.connect(process.env.MONGODB_URI)
        console.log('MongoDB Connected Sucessfully...!');       
    } catch (error) {
        console.log('Error Occuried',error.message);
    }
}