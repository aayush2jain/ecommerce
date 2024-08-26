"use client"
import react, { useState } from 'react'
import Image from 'next/image'
import data from '../../data/product.json'
import Navbar from "@/components/navbar";
export default function cart(){
    return(
          
        <>
            <Navbar></Navbar>

       <div className='flex flex-row'>
        <div className='w-[60vw] h-auto bg-white flex flex-col pl-[4vw]'>
            <div className='flex flex-row gap-[20vw] mt-[2vh]'>
                <h1 className='font-extrabold text-xl pt-[1vh] w-auto h-[4vh]'>2/4 items selected</h1>
                <div className='flex flex-row font-medium gap-[1vw]'>
                    <div className='bg-pink-300 p-[1.5vh] rounded-lg w-auto'>SELECT ALL</div>
                    <div className='bg-pink-300 p-[1.5vh] rounded-lg w-auto'>REMOVE ALL</div>
                </div>
            </div>
                   
                    {data.cartitems.map((item)=>(
                        <div className='w-[50vw] flex flex-row outline-dashed my-[2vh] p-[2vh]'>
                            <div className='w-[15vw] h-[30vh] bg-slate-900'>
                                <img className='w-[15vw] h-[30vh]' src={item.image}></img>
                            </div>
                            <div className='w-[40vw] h-[30vh] font-bold text-xl ml-[3vw]'>
                                <h1 className='mt-[1vh]'>{item.title}</h1>
                                <h1 className='mt-[1vh]'>size</h1>
                                <h1 className='mt-[1vh]'>{item.price}</h1>
                                <h1 className='mt-[1vh]'>quantity</h1>
                                <h1 className='mt-[1vh]'>[deleivery location would bee shown there]</h1>
                            </div>
                        </div>
                    ))}
        </div>
        <div className='w-[40vw] h-auto bg-white '>
            <h1 className='font-bold text-xl'>Enter Delivery Location</h1>
            <h1>Please add your full address</h1>
            <input className='w-[30vw] h-[30vh]  bg-slate-300 my-[2vh] '></input>
            <h1 className='font-bold'>SELECT DATE FOR HOME TRIAL</h1>
                    <input type="date" id="birthdate" name="birthdate"></input>
            <h1 className='font-bold mt-[2vh]'>SELECT TIME FOR HOME TRIAL</h1>
                    <input type="time" id="appointment-time" name="appointment-time"></input>
             <div className='outline-dashed w-[30vw] py-[2vh] px-[1vw] mt-[30vh]'>
             <h1 className='font-bold'>Price Details</h1>
             <h1 className='my-[2vh]'>Convience fees</h1>
             <h1 className='mb-[2vh] font-bold'>Total amount</h1>
             </div>
            <div className='w-[14vw] text-center ml-[7vw] font-medium rounded-lg bg-pink-300 mt-[1vh] py-[2vh] '>
                Book Now
            </div>
        </div>
       </div>
        </>
    )
}