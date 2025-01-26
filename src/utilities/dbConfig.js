import mongoose from 'mongoose'

export async function connect(){
    try{
       await mongoose.connect(process.env.MONGODB_URI)
       mongoose.connection
      console.log('Mongodb Connected...');
      

    }catch(error){
        console.log(error);
    }
}