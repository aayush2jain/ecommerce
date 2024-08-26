"use client"
import React, { useState } from "react";
import back from '../../../public/picture/back.png'
import Image from "next/image";
export default function signup() {
    return (
        <>
            <div className="relative">
                <div className={`flex justify-center absolute items-center w-[100vw] h-[100vh] bg-[url()] bg-cover blur-sm  brightness-75`}>
                    <Image src={back} className="h-[100vh] w-[100vw]" alt="" ></Image>
                </div>
                <div className=' w-[30vw] h-[75vh] rounded-3xl flex flex-col absolute top-[10vh] left-[40vw] bg-white' >
                    <h1 className='mt-[8vh] font-bold my-4 text-xl mx-[3.5vw] text-center '>WELCOME</h1>
                    <h1 className='font-bold my-1 text-xl mx-[3.5vw] text-center '>SIGN IN WITH EMAIL</h1>
                    <h1 className="mx-[2.5vw]">EMAIL:</h1>
                    <input type='text' placeholder='Email' className='py-[2vh] mb-[2vh] mx-[2.5vw] pl-4 rounded-xl bg-gray-200'></input>
                    <h1 className="mx-[2.5vw]">PASSWORD:</h1>
                    <input type='text' placeholder='Password' className='py-[2vh] mb-[2vh] mx-[2.5vw] pl-4 rounded-xl bg-gray-200'></input>
                    <a className='width-[10vw] mx-[2.5vw] text-center mt-[2vh] bg-black text-white text-xl rounded-full' href="/"><button className='width-[10vw] text-center mx-[2.5vw] py-[1vh] my-[1vh] bg-black text-white text-xl rounded-full'>Log In</button></a>

                    <a href="/signup" className='text-center mt-[4vh] underline text-black decoration-black' >New User? Sign up</a>
                </div>
            </div>
        </>
    )
}