import express from "express"
import { app } from "../app.js"
import { adduser, showAllUsers,deleteUserById,updateUser,getOneUser } from "../controllers/user.controller.js"
const router=express()

router.route("/addUser").post(adduser)
router.route("/showAllUsers").get(showAllUsers)
router.route("/deleteUserById/:id").delete(deleteUserById)
router.route("/updateUser/:id").post(updateUser)
router.route("/getOneUser/:id").get(getOneUser)

export default router