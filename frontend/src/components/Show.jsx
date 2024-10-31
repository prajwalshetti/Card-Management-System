import React, {  useEffect, useState } from 'react'
import axios from "axios"
import {Link} from "react-router-dom"

function Show() {
  const [data,setData]=useState([]);
  const [error,setError]=useState("");
  const [success,setSuccess]=useState("")

 const getData=async()=>{
  try {
    setError("")
    const response=await axios.get("http://localhost:8000/api/v1/user/showAllUsers");
    if(response.status==200)
    {
      console.log(response)
      setData(response?.data?.allUsers)
    }
  } catch (err) {
      console.log(err)
      setError(err.response?.data?.message||"An unexpected error occured")
  }
 }
  useEffect(()=>{getData();},[])

const handleDelete=async(id)=>{
  try {
    setError("")
    const response=await axios.delete(`http://localhost:8000/api/v1/user/deleteUserById/${id}`)
    if(response.status==200)
    {
      setSuccess("Deleted successfully")
      setTimeout(() => {
        setSuccess("")
    }, 3000);
      getData();
    }
    
  } catch (err) {
      console.log(err)
      setError(err?.response?.data?.message||"An unexpected error occured")
  }
}

  return (
    <>
      {error && (
      <div className="text-center p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
      <span className="font-medium">Error: </span> {error}
      </div>
      )}

      {success && (
      <div className="text-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
      <span className="font-medium">Success: </span> {success}
      </div>
      )}
    <div className='container flex flex-wrap justify-center my-4'>

      
      {data.length>0?(
        data.map((user,index)=>
          <div key={user._id} className="m-2 w-1/5 max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#" className='no-underline'>
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white no-underline text-center">{user.username}</h5>
        </a>
        <p className="text-center mb-2 mt-2 text-gray-700 dark:text-gray-400 font-semibold">{user.email}</p>
        <p className="text-center mb-3 text-gray-700 dark:text-gray-400 font-semibold">{user.favNumber}</p>

        <div className='flex justify-evenly'>
          <Link to={`/${user._id}`} className="bg-blue-600 pl-3 pr-3 pt-1 pb-1 mr-2 rounded text-white hover:bg-blue-700 no-underline">Edit</Link>
          <button className="bg-blue-600 pl-2 pr-2 pt-1 pb-1 ml-2 rounded text-white hover:bg-blue-700" onClick={()=>handleDelete(user._id)}>Delete</button>
        </div></div>
        )
      ):<h1>No users found</h1>}
    </div>
    </>
  )
}

export default Show