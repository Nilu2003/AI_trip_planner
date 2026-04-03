import mongoose from "mongoose";
import { dbName } from "../constants.js";

const connectDB= async() =>{
    try {
        const responseInstance= await mongoose.connect(`${process.env.MONGODB_URI}/${dbName}`)
        console.log("database connected !! DB host-",responseInstance.connection.host);
        
    } catch (error) {
        console.log("datbase not connected",error)
    }

}


export default connectDB