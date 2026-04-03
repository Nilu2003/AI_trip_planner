import {Router} from "express"
import { loginUser, logOutUser, registerUser } from "../controllers/user.controllers.js"
import { isVerified } from "../middlewares/auth.middleware.js"

const router= Router()

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/logout").post(isVerified,logOutUser)


export default router