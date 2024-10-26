
"use client"
import React from "react";
import Image from "next/image";
import { GoHeart } from "react-icons/go";
import { GiShoppingBag } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
import logo from '../../public/picture/logo.png';
import { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "../components/ui/navbar-menu";
export default function Navbar(){
    const [active, setActive] = useState<string | null>(null);
    return(
        <>
            <div className='nav bg-white text-black pb-[2vh] md:pb-[4vh]'>
                <div className='nav1 flex flex-row pt-[2vh] md:pt-[6vh] md:pl-[3vw] '>
                        <Image src={logo} alt="" className='md:h-[4vh] w-[50vw] h-[7vh] md:w-[20vw]' ></Image>
                    <div className='search md:pl-[10vw] md:flex flex-col hidden '>
                        <div className='flex flex-row'>
                            <input type='text' className='md:w-[35vw] h-[5vh] md:px-[1vw] rounded-full bg-pink-100'></input>
                            <GoSearch size={"4vh"} className="bg-pink-100 invisible md:absolute md:visible right-[33vw] top-[6.5vh]" />
                        </div>
                        <div className="md:flex hidden flex-row gap-[3vw] mt-[5vh] pl-[1vw] w-0 md:w-[40vw] text-xl tracking-wide">
                            <Menu setActive={setActive}>
                                <MenuItem setActive={setActive} active={active} item="MEN">
                                    <div className="flex flex-col space-y-4 text-sm text-black ">
                                        <HoveredLink href="/product">Shirt</HoveredLink>
                                        <HoveredLink href="/product">Cap</HoveredLink>
                                        <HoveredLink href="/product">Jeans</HoveredLink>
                                        <HoveredLink href="/product">Hoodie</HoveredLink>
                                    </div>
                                </MenuItem>
                                <FaChevronDown className="text-lg mt-[1vh]" />
                                <MenuItem setActive={setActive} active={active} item="WOMEN">
                                    <div className="flex flex-col space-y-4 text-sm text-black">
                                        <HoveredLink href="/product">Shirt</HoveredLink>
                                        <HoveredLink href="/product">Cap</HoveredLink>
                                        <HoveredLink href="/product">Jeans</HoveredLink>
                                        <HoveredLink href="/product">Hoodie</HoveredLink>
                                    </div>
                                </MenuItem>
                                <FaChevronDown className="text-lg mt-[1vh]" />
                                <MenuItem setActive={setActive} active={active} item="KIDS">
                                    <div className="flex flex-col space-y-4 text-sm text-black z-50">
                                        <HoveredLink href="/product">Shirt</HoveredLink>
                                        <HoveredLink href="/product">Cap</HoveredLink>
                                        <HoveredLink href="/product">Jeans</HoveredLink>
                                        <HoveredLink href="/product">Hoodie</HoveredLink>
                                    </div>
                                </MenuItem>
                                <FaChevronDown className="text-lg mt-[1vh]" />
                                <MenuItem setActive={setActive} active={active} item="BRANDS">
                                    <div className="flex flex-col space-y-4 text-sm text-black z-50">
                                        <HoveredLink href="/product">Shirt</HoveredLink>
                                        <HoveredLink href="/product">Cap</HoveredLink>
                                        <HoveredLink href="/product">Jeans</HoveredLink>
                                        <HoveredLink href="/product">Hoodie</HoveredLink>
                                    </div>
                                </MenuItem>
                                <FaChevronDown className="text-lg mt-[1vh]" />
                            </Menu>
                        </div>
                    </div>
                    <div className='sign in flex flex-row md:pl-[10vw] md:gap-[2vw] invisible md:visible'>
                        {/* <a href="/wish"><GoHeart size={'5vh'} /></a> */}
                        <a href="/cart"><GiShoppingBag size={'5vh'} /></a>
                        <a href="/signin"><h1 className='text-black text-2xl'>SIGN IN</h1></a>
                    </div>
                </div>
            </div>
        </>
    )
} 