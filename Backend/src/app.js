import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
const app= express()

app.use(cors({
    origin:process.env.origin,
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



export {app}