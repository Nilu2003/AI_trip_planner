import mongoose, { Schema } from "mongoose"

const tripModel= new Schema({
    userId: {
        type:Schema.Types.ObjectId,
        ref:"User"
    },
    location:{
        type:String
    },
     days: {
        type:String
     },
    people: {
        type:String,
    },
    budget: {
        type:String,
    },
    tripData:{
        type:Object,
    }

},{
    timestamps:true,
})


export const Trip= mongoose.model("Trip",tripModel) 