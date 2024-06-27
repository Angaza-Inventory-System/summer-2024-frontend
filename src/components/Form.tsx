import React, { useState } from "react";
import axios from 'axios';

const Form = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        alert("You are Signed In");
        try {
            await axios.post(`http://localhost:5173/api/signin`, {
            email, password
        })
        } catch (e) {
            if(e.res.message){
                setError(e.res.message);
            }
        }
    }
    const toggleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <>
        <div className="flex w-screen justify-center">
        <div className="absolute w-1/4 h-screen mx-auto'">
            <h1 className='text-center text-3xl text-[#00008B] font-extrabold pt-10 pb-10'>Angaza Technology Literacy Center</h1>
            {error ?(<div>{error}</div>):('')}  
            <form className="max-w-sm mx-auto w-full" onSubmit={handleSubmit}>
                <div className="flex flex-col pt-10">
                    <label htmlFor="email" className="text-[#00008B] font-extrabold">Email</label>
                    <input type="text"  className="border-none mb-3 rounded-md" onChange={e => setEmail(e.target.value)} value={email}/>
                    <label htmlFor="password" className="text-[#00008B] font-extrabold">Password</label>
                    <div className="relative">
                        <input type={showPassword ? "text" : "password"}  className="rounded-md border-none pr-48" onChange={e => setPassword(e.target.value)} value={password}/>
                        <button type="button" className="absolute inset-y-0 right-0 pr-2 flex items-center" onClick={toggleShowPassword}> {showPassword ? <i className="fas fa-eye-slash fa-2x"></i> : <i className="fas fa-eye fa-2x"></i>} </button>
                    </div>
                    <button type="submit" className="transition ease-in duration-600 rounded-full text-lg leading-4 font-medium bg-blue-500 hover:bg-sky-700 hover:scale-105 h-8 mt-5 text-white" onClick={handleSubmit}>Sign In</button>
                </div>
            </form>
        </div>
        </div>
        <img alt="a" className="w-screen h-screen" src="https://cdn.discordapp.com/attachments/1249232893268590684/1254204922782814310/better_better.png?ex=6678a4db&is=6677535b&hm=80fefaa71c474dff7cb7b506ba782a08eb64c8f241a0fbe6fb5112e1e5635a6b&" />
        </>
    )
}
export default Form                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         