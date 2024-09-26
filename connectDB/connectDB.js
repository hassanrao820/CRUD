import mongoose from "mongoose";
const connectDB = async () => {
    try{
        const connect = await mongoose.connect('mongodb://localhost:27017/crud');
        if (connect) {
            console.log('Connection Successfull...');
        } else{
            console.log('Connection Failed....');
        }
    } catch(err){
        console.log(err);
    }
}

export default connectDB;