import mongoose, { Schema } from "mongoose"

const userSchema = new Schema(
    {
        email: {
            type: String,
            required:true,
            index:true,
            trim:true,
            unique:true,

        },
        password:{
            type:String,
            required:true,

        },
        fullName:{
            type:String,
        },
        Avatar:{
            type:String,
            required:true,
        }

    },
    {
        timestamps: true
    }
)


export const User= mongoose.model("User",userSchema)