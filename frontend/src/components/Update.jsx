import React, { useEffect, useLayoutEffect, useState } from 'react';
import axios from "axios"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Update() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [favNumber, setFavNumber] = useState(0);
    const [error, setError] = useState("");
    const [success,setSuccess]=useState("")
    const {id}=useParams()
    const navigate=useNavigate()

    const handleSubmit=async(e)=>{
        e.preventDefault();
        setError("")
        setSuccess("")
        if(!username||!email)
        {
            setError("username and email are required")
            return;
        }
        if(!favNumber)setFavNumber(0)
        try {
            const response=await axios.post(`http://localhost:8000/api/v1/user/updateUser/${id}`,{
                username,
                email,
                favNumber:Number(favNumber),
            });

            if(response.status==200){
                setSuccess("User details updated successfully")
                setTimeout(() => {
                    navigate("/all")
                }, 1000);
            }
            else{
                console.log("Else part")
            }

        } catch (err) {
            console.error("Error details:", err);
            setError(err.response?.data?.message || "An unexpected error occurred.");
        }

        setTimeout(() => {
            setError("")
            setSuccess("")
        }, 3000);
        }

    const getUser=async()=>{
        try {
            const response=await axios.get(`http://localhost:8000/api/v1/user/getOneUser/${id}`)
            if(response.status==200)
            {    
                const user=response.data.user
                setUsername(user.username)
                setEmail(user.email)
                setFavNumber(user.favNumber)
            }
        } catch (err) {
            console.log(err)
            setError(err?.response?.data?.message||"An unknown error occured")
        }
    }
    useEffect(()=>getUser,[])

    return (
        <div className='flex justify-center pt-10'>
            <div className="bg-white shadow-lg rounded-lg p-8">
                {error && (
                <div className="p-4 mb-4 text-sm text-red-800 rounded-lg bg-red-50" role="alert">
                <span className="font-medium">Error: </span> {error}
                </div>
                )}

                {success && (
                <div className="text-center p-4 mb-4 text-sm text-green-800 rounded-lg bg-green-50" role="alert">
                <span className="font-medium">Success: </span> {success}
                </div>
                )}


                <div className="relative flex flex-col">
                    <h4 className="block text-xl font-medium text-slate-800">
                        Update your details
                    </h4>

                    <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
                        <div className="mb-1 flex flex-col gap-6">

                            <div className="w-full max-w-sm min-w-[200px]">
                                <label className="block mb-2 text-sm text-slate-600">
                                    Your Name
                                </label>
                                <input
                                    type="text"
                                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                    placeholder="Your Name"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />
                            </div>

                            <div className="w-full max-w-sm min-w-[200px]">
                                <label className="block mb-2 text-sm text-slate-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                    placeholder="Your Email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="w-full max-w-sm min-w-[200px]">
                                <label className="block mb-2 text-sm text-slate-600">
                                    Your Favourite Number
                                </label>
                                <input
                                    type="number"
                                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                                    placeholder="Your Favourite Number"
                                    value={favNumber}
                                    onChange={(e) => setFavNumber(e.target.value)}
                                />
                            </div>
                        </div>

                        <button
                            className="mt-4 w-full rounded-md bg-slate-800 py-2 px-4 border border-transparent text-center text-sm text-white transition-all shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Update