import JWT from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";


export const isVerified= asyncHandler(async(req,res) =>{

    const token=req.cookie.accessToken 
  
    if(!token){
        throw new ApiError(400,"unauthrized token")
    }

    const decode= JWT.verify(token,process.env.ACESS_SECERT_KEY)

    if(!decode){
        throw new ApiError(400,"unaurized user-usertoken not verify")
    }

    const user= await User.findById(decode.id)

    req.user=user


})