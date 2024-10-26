"use client"
import React, { useState } from "react";
import back from '../../../public/picture/back.png'
import Image from "next/image";
export default function signin(){
    return(
        <>
            <div className="relative">
                <div className="flex justify-center items-center absolute w-screen h-screen bg-cover bg-[url()] blur-sm brightness-75">
                    <Image src={back} className="h-full w-full" alt="Background Image" />
                </div>

                <div className="absolute top-[20vh] left-[40vw] w-[30vw] h-[65vh] rounded-3xl bg-white flex flex-col">
                    <h1 className="mx-[3.5vw] my-4 mt-[8vh] text-xl font-semibold">LOG IN</h1>

                    <div className="flex items-center mb-[2vh] mx-[2.5vw] pl-4 bg-gray-200 rounded-xl">
                        <h1 className="py-[2vh]">+91</h1>
                        <input
                            type="text"
                            placeholder="Enter Your Mobile"
                            className="ml-[1vw] py-[2vh] focus:border-none bg-gray-200 outline-none"
                        />
                    </div>

                    <button className="w-[25vw] mx-[2.5vw] py-3 text-xl text-white bg-black rounded-xl">GET OTP</button>

                    <div className="flex justify-center items-center w-[25vw] ml-[2.5vw] mt-2 border-2 border-black rounded-xl">
                        <a href="/login">
                            <button className="py-3 text-xl">Sign In With Email</button>
                        </a>
                    </div>

                    <div className="flex items-center w-[25vw] ml-[2.5vw] mt-2 border-2 border-black rounded-xl">
                        <div className="ml-[5vw] mt-6">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg" alt="Google Logo" className="w-6 h-6" />
                        </div>
                        <button className="py-3 text-xl mt-[2vh]">Continue using Google</button>
                    </div>

                    <a href="/signup" className="mt-1 text-center text-black underline decoration-black">
                        New User? Sign up
                    </a>
                </div>
            </div>

        </>
    )

}