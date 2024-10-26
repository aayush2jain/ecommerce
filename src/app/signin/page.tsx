"use client"
import React, { useState } from "react";
import back from '../../../public/picture/back.png'
import Image from "next/image";
export default function signin(){
    return(
        <>
            <div className="relative min-h-screen flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full bg-cover bg-center blur-sm brightness-75">
                    <Image src={back} className="h-full w-full object-cover" alt="Background Image" />
                </div>

                {/* Login Card */}
                <div className="relative w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] h-[75vh] sm:h-[70vh] md:h-[65vh] lg:h-[65vh] bg-white rounded-3xl flex flex-col items-center shadow-lg">
                    <h1 className="mt-[6vh] text-2xl font-semibold sm:text-3xl">LOG IN</h1>

                    {/* Mobile Number Input */}
                    <div className="mt-[4vh] mb-4 w-[80%] bg-gray-200 rounded-xl flex items-center px-4">
                        <span className="text-lg">+91</span>
                        <input
                            type="text"
                            placeholder="Enter Your Mobile"
                            className="ml-2 w-full py-3 bg-transparent outline-none"
                        />
                    </div>

                    {/* Get OTP Button */}
                    <button className="w-[80%] py-3 text-xl font-medium bg-black text-white rounded-xl">
                        GET OTP
                    </button>

                    {/* Sign In with Email */}
                    <div className="w-[80%] mt-4 border-2 border-black rounded-xl">
                        <a href="/login">
                            <button className="w-full py-3 text-xl">Sign In With Email</button>
                        </a>
                    </div>

                    {/* Continue with Google */}
                    <div className="w-[80%] mt-4 flex items-center border-2 border-black rounded-xl">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                            alt="Google Logo"
                            className="w-6 h-6 ml-4"
                        />
                        <button className="flex-grow py-3 text-xl">Continue using Google</button>
                    </div>

                    {/* Sign Up Link */}
                    <a href="/signup" className="mt-2 text-center text-black underline decoration-black">
                        New User? Sign up
                    </a>
                </div>
            </div>


        </>
    )

}