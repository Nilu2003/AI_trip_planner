import JWT from "jsonwebtoken";
import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import { User } from "../models/user.model.js";


export const isVerified= asyncHandler(async(req,res,next) =>{
    
    
    const token=req.cookies?.acessToken
  
    if(!token){
        throw new ApiError(400,"unauthrized token")
    }

    const decode= JWT.verify(token,process.env.ACESS_SECERT_KEY)
    // console.log(decode);
    

    if(!decode){
        throw new ApiError(400,"unaurized user-usertoken not verify")
    }

    const user= await User.findById(decode.id)
    // console.log(user);
    

    req.user=user
    next()


})