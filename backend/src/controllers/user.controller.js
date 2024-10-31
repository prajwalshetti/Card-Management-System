import { asyncHandler } from "../utils/asynchandler.js"
import { ApiError } from "../utils/ApiErrors.js"
import {User} from "../models/user.model.js"

const adduser=asyncHandler( async(req,res)=>{
    const {email,username,favNumber}=req.body;
    if(!email||!username)
        return res.status(400).json({ message: "email, username and favNumber are required" });

    const existedUserOnEmail=await User.findOne({email});
    const existedUserOnUsername=await User.findOne({username});
    if(existedUserOnEmail||existedUserOnUsername) return res.status(400).json({ message: "User already exists with the same email or username." });
    const user=await User.create({
        email:email,
        username:username.toLowerCase(),
        favNumber:favNumber||1
    })

    const createdUser=await User.findById(user._id)
    if(!createdUser) return res.status(500).json({ message: "User creation unsucessfull" });
    
    res.status(200).json({createdUser})
} )

const showAllUsers=asyncHandler( async(req,res)=>{
    const allUsers=await User.find()
    res.status(200).json({allUsers})
} )

//delete by id
const deleteUserById=asyncHandler( async(req,res)=>{
    const {id}=req.params
    if(!id) throw new ApiError(400,"Id is required to delete the user")
    
    const user=await User.findByIdAndDelete({_id:id})
    if(!user) throw new ApiError(400,"User does not exists")

    res.status(200).json({user})
} )

//update
const updateUser=asyncHandler( async(req,res)=>{
    const {id}=req.params;
    const {username,email,favNumber}=req.body;

    if(!id) throw new ApiError(400,"required fields are missing")

    const updatedUser=await User.findByIdAndUpdate(id,{
        $set:{
            username:username,
            email:email,
            favNumber:favNumber
        }
    },{new:true})

    if(!updatedUser) throw new ApiError(500,"User updation failed")
    
    res.status(200).json({updatedUser})
} )

const getOneUser=asyncHandler( async(req,res)=>{
    const {id}=req.params
    if(!id) throw new ApiError(400,"id is required")
    
    const user=await User.findById(id)
    if(!user) throw new ApiError(400,"No user found")
    
    res.status(200).json({user})
} )

export {adduser,showAllUsers,deleteUserById,updateUser,getOneUser}