import {Router} from "express"
import { getProfile, loginUser, logOutUser, registerUser } from "../controllers/user.controllers.js"
import { isVerified } from "../middlewares/auth.middleware.js"

const router= Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(isVerified,logOutUser)
router.route("/getprofile").get(isVerified,getProfile)


export default router