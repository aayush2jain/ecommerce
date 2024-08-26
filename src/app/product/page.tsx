"use client"
import react, { useState } from 'react'
import Image from 'next/image'
import data from '../../data/product.json'
import { FaStar } from "react-icons/fa6";
import {useNavigate} from 'react-router-dom'
import { useRouter } from 'next/navigation'; 
import Navbar from "@/components/navbar";// Use next/navigation for routing in Next.js

export default function product(){
    const router = useRouter(); // Use router for navigation
    // Handle redirection
    function handleRedirect(id:number) {
        router.push(`/items/${id}`); // Navigate to the specified route
    }
    return(
        <>
            <Navbar></Navbar>

        <div className='flex flex-row '>
            <div className='w-[20vw] h-[80vh] bg-white pl-[3vw] flex flex-col font-medium gap-[1.5vh]'>
               <h1 className='text-2xl'>Filters</h1>
               <h1>Category</h1>
               <h1>Brand</h1>
               <h1>Price</h1>
               <h1>Size</h1>
               <h1>Discount</h1>
               <h1>Product Label</h1>
               <h1>Launched In</h1>
               <h1>Color</h1>
               <h1>Material</h1>
               <h1>Ocassion</h1>
               <h1>Work</h1>
               <h1>Pattern</h1>
               <h1>Fit</h1>
            </div>
            <div className='w-[80vw] h-auto bg-white flex flex-wrap justify-around'>
                 {data.product.map((item)=>(
                     <div className='w-[20vw] h-[55vh] bg-white flex flex-col p-[1vw] rounded-xl mt-[10vh] border-2' onClick={() => handleRedirect(item.id)} >
                        <div className='relative'>
                         <img alt="" className='w-[18vw] h-[40vh] mx-auto' src={item.image}></img>
                             <div className='absolute h-[5vh] w-[5vw] bg-red-200 bottom-0 right-0 flex items-center gap-3 px-1 '>
                                <h1>4.2</h1>
                                 <FaStar className='h-[4vh]' />
                             </div>
                         </div>
                         <h1 className='pt-[2vh]'>Brand Image</h1>
                         <h1>{item.title}</h1>
                         <h1>{item.price}</h1>
                        
                         
                     </div>
                 ))}
            </div>
        </div>
        </>
    )
}