import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app= express()
import dotenv from "dotenv"

dotenv.config({
    path:'./.env'
})

app.use(cors({
    origin:process.env.ORIGIN,
    credentials:true
}))

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static('public'))
app.use(cookieParser())

import tripRouter from "./routes/trip.routes.js"
import userRouter from "./routes/user.routes.js"

app.use("/api/v1/trip",tripRouter)
app.use("/api/v1/users",userRouter)


app.use((err, req, res, next) => {
    // console.log("Error middleware triggered:", err.message)

    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error",
        errors: err.errors || []
    })
})


export {app}