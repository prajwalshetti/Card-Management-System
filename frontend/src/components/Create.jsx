import React, { useState } from 'react';
import axios from "axios"

function Create() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [favNumber, setFavNumber] = useState(0);
    const [error, setError] = useState("");
    const [success,setSuccess]=useState("")

    const handleSubmit=async(e)=>{
        e.preventDefault();
        setError("")
        setSuccess("")

        try {
            
            const response=await axios.post("http://localhost:8000/api/v1/user/addUser",{
                username,
                email,
                favNumber:Number(favNumber),
            });

            if(response.status==200){
                setSuccess("User registered successfully")
                setUsername("")
                setEmail("")
                setFavNumber(0)
                console.log(response)
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
                        Enter your details
                    </h4>
                    <p className="text-slate-500 font-light">
                        Nice to meet you! Please provide us your details.
                    </p>

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
export default Create;
