"use client"
import react, { useState } from 'react'
import Image from 'next/image'
import data from '../../data/product.json'
import Navbar from "@/components/navbar";

export default function wish(){
    return(
        <>
        <Navbar></Navbar>
        <div className='flex justify-around gap-[1vw] flex-wrap bg-white'>
            {data.wishitems.map((item)=>(
                <div className='h-[70vh] w-[20vw] bg-white outline-dashed'>
                    <img className='h-[50vh] w-[20vw] ' src={item.image}></img>
                    <h1 className='font-semibold ml-[2vw]'>Product Name</h1>
                    <h1 className='font-semibold ml-[2vw]'>Price</h1>
                    <a href='/cart'><div className="h-[8vh] mt-[1vh] mx-[1vw] w-[18vw] bg-pink-300 flex justify-center items-center rounded-lg">Add For Home Trial</div></a>
                </div>
            ))}
        
        
        </div>
        </>
    )
}