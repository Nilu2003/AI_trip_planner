import { asyncHandler } from "../utils/asyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import bcrypt from "bcrypt"
import {User} from "../models/user.model.js"
import JWT from "jsonwebtoken"


const generateAcessTokenAndRefreshToken = async(user) =>{
     const data ={
        id:user._id
     }

     if(!data){
        throw new ApiError(400,"data is not paased")
     }

    const AcessToken= JWT.sign(data,process.env.ACESS_SECERT_KEY,{expiresIn:process.env.ACESS_KEY_EXPIRY})

    const rData={
        id:user._id,
        email:user.email
    }

    if(!rData){
        throw new ApiError(400,"re-token is not passed")
    }

    const refreshToken= JWT.sign(rData,process.env.ACESS_SECERT_KEY,{expiresIn:process.env.ACESS_KEY_EXPIRY})
    

    const users= await User.findById(user._id)
    users.refreshToken =refreshToken
    await users.save({ validateBeforeSave: false })
    return {AcessToken,refreshToken}

}

const registerUser=asyncHandler(async (req,res) =>{
    const {email,password,fullName}=req.body
    
    if([email,password,fullName].some(field => field.trim() == "")){
        throw new ApiResponse(200,"plese enter all the field")
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
        throw new ApiError(400,"user email account alerady exist")
        };

       const hashPassword=await bcrypt.hash(password,10)

       const user= await User.create({
        email,
        password:hashPassword,
        fullName
       })

       return res.status(201).json(new ApiResponse(201,user,"user account created sucessfully"))

})

const loginUser=asyncHandler(async (req,res) =>{

    const {email,password}= req.body

    if([email,password].some(field => field.trim() == "")){
        throw new ApiError(401,"plese enter email and password")
    }
    
    const user= await User.findOne({email})

    if(!user){
        throw new ApiError(404,"user not found")
    }

     const checkedPassword=await bcrypt.compare(password,user.password)

     if(!checkedPassword){
        throw new ApiError(402,"plese enter corrct password")
     }
     
      const {AcessToken,refreshToken}= await generateAcessTokenAndRefreshToken(user)

      const option ={
        httpOnly:true,
        secure:true
      }

      const existedUser= await User.findById(user._id).select("-password -refreshToken")

     return res.status(202)
     .cookie("acessToken",AcessToken,option)
     .cookie("refreshToken",refreshToken,option)
     .json(new ApiResponse(202,existedUser,"user login sucessfully"))

})


const logOutUser=asyncHandler(async (req,res) =>{
    console.log(req.user);
    
    await User.findByIdAndUpdate(
        req.user.id,
        {
            refreshToken: undefined
        },
        {
            new:true
        }
    )

    const option ={
        httpOnly:true,
        secure:true
      }

    return res.status(200)
    .clearCookie("acessToken",option)
    .clearCookie("refreshToken",option)
    .json(new ApiResponse(200,{},"user logout sucessfully "))
})

const updateUser=asyncHandler(async (req,res) =>{

})

const getProfile= asyncHandler(async(req,res) =>{
    const user=await User.findById(req.user.id).select("-password -refreshToken")
    if(!user){
        throw new ApiError(400,"user not getting...")
    }

    return res.status(200).json(new ApiResponse(200,user,"user fetched sucessfully"))
})



export {registerUser,
    loginUser,
    logOutUser,
    updateUser,
    getProfile
}
