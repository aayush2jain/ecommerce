"use client";
import React from "react";
import back from '../../../public/picture/back.png';
import Image from "next/image";

export default function Signup() {
    return (
        <>
            <div className="relative min-h-screen flex items-center justify-center">
                {/* Background Image */}
                <div className="absolute inset-0 w-full h-full bg-cover bg-center blur-sm brightness-75">
                    <Image src={back} className="h-full w-full object-cover" alt="Background Image" />
                </div>

                {/* Signup Card */}
                <div className="relative  w-[90vw] sm:w-[80vw] md:w-[60vw] lg:w-[40vw] xl:w-[30vw] h-full bg-white rounded-3xl flex flex-col items-center shadow-lg p-6">
                    <h1 className="text-2xl sm:text-3xl font-semibold mt-[4vh] mb-4">SIGN UP</h1>

                    {/* Input Fields */}
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="w-[80%] py-3 mb-4 px-4 rounded-xl bg-gray-200 outline-none"
                    />
                    <input
                        type="text"
                        placeholder="Email"
                        className="w-[80%] py-3 mb-4 px-4 rounded-xl bg-gray-200 outline-none"
                    />
                    <div className="w-[80%] flex items-center bg-gray-200 rounded-xl mb-4 px-4">
                        <span className="text-lg">+91</span>
                        <input
                            type="text"
                            placeholder="Enter Your Mobile"
                            className="w-full ml-2 py-3 bg-transparent outline-none"
                        />
                    </div>
                    <input
                        type="password"
                        placeholder="Password"
                        className="w-[80%] py-3 mb-4 px-4 rounded-xl bg-gray-200 outline-none"
                    />

                    {/* Get OTP Button */}
                    <button className="w-[80%] py-3 text-xl text-white bg-black rounded-3xl">
                        Get OTP
                    </button>

                    {/* Continue with Google */}
                    <div className="w-[80%] mt-4 flex items-center border-2 border-black rounded-xl">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
                            alt="Google Logo"
                            className="w-6 h-6 ml-4"
                        />
                        <button className="flex-grow py-3 text-xl">Continue using Google</button>
                    </div>

                    {/* Sign In Link */}
                    <a href="/signin" className="mt-4 text-center text-black underline decoration-black">
                        Already Registered? Sign in
                    </a>
                </div>
            </div>
        </>
    );
}
