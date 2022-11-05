import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { useEffect, useState} from 'react'
import { Link } from 'react-router-dom'

export const user = "abc123";
export default function Login() {
    const [ID, setID] = useState()

    return (
    <section class="flex justify-center h-screen items-center">

    <div class="position:relative xl:w-1/2 px-10
            flex items-center justify-center">
    
        <div class="w-full h-100">
        <h1 class="text-8xl flex justify-center text-[#1D5257] font-bold mb-10">Welcome Back!</h1>
    
        <form>
            
            <div class="mt-8">
            <label class="block font-bold text-3xl text-[#1D5257]">Customer ID</label>
            <input type="name" id="" placeholder="Enter your email" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required/>
            </div>
    
            <div class="mt-8">
            <label class="block font-bold text-3xl text-[#1D5257]">Password</label>
            <input type="password" name="" id="" placeholder="Enter your password" minlength="6" class="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
                    focus:bg-white focus:outline-none" required/>
            </div>

            <a href="/home" class="w-full text-center block bg-[#1D5257] hover:bg-[#58dedb] focus:bg-[#58dedb] text-2xl text-white font-semibold rounded-lg
                px-4 py-3 mt-6">Sign In</a>
        </form>
    
        <p class="mt-10 text-2xl text-[#308b93] flex justify-center">
            Don't have an account?   
            <a href="/register" class="ml-2 text-2xl text-[#1D5257] hover:text-[#58dedb] focus:text-[#58dedb] font-semibold">
                Sign up!
            </a>
        </p>
    
        </div>

    </div>
    
    </section>
    ) 
}