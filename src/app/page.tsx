"use client"
import Image from "next/image";
import { GoHeart } from "react-icons/go";
import { GiShoppingBag } from "react-icons/gi";
import { GoSearch } from "react-icons/go";
import { FaChevronDown } from "react-icons/fa";
import Spline from '@splinetool/react-spline/next';
import { FlipWords } from "../components/ui/flip-words";
import { ImagesSlider } from "../components/ui/image-slider";
import { motion, AnimatePresence } from "framer-motion";
import { WobbleCard } from "../components/ui/wobble-card";
import { InfiniteMovingCards } from "../components/ui/infinite-moving-cards";
import logo from '../../public/picture/logo.png'
import noise from '../../public/noise.webp'
import { useRouter } from "next/router";
import Link from "next/link";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useState } from "react";
import Navbar from "@/components/navbar";

gsap.registerPlugin(useGSAP, ScrollTrigger);
export default function Home() {

  useGSAP(() => {
    gsap.to('#imp', {
      opacity: 1,
      paddingRight: 0,
      paddingLeft: 20,
      duration: 3,
      scrollTrigger: {
        trigger: '#imp',
        start: 'top 90%',
        end: "top 10%",
        scrub: 2
      }
    })

  })
  const words = ["NEXT GENERATION", "VOGUEISH"];
  const images = [
    'https://img.freepik.com/free-photo/fashion-portrait-gorgeous-woman-stylish-winter-fluffy-blue-coat-black-hat-posing-bright-grey-wall_273443-4071.jpg?t=st=1722414988~exp=1722418588~hmac=0849694f27087ac1363f9763d2925cf3f9ce480f5bdc98b0199f7addef864e3e&w=900',
    "https://img.freepik.com/free-photo/young-beautiful-smiling-woman-shows-peace-sign-trendy-girl-casual-summer-hoodie-skirt-clothes-sitting-floor_158538-1419.jpg?t=st=1722417568~exp=1722421168~hmac=b30c0397da72b354b9d6eca82c2ff25320dd803d62295240ba51c1c96579c929&w=826",
    "https://img.freepik.com/free-photo/photo-young-hot-girl-room-with-black-bra-blue-jeans-high-quality-photo_144627-74978.jpg?t=st=1722417677~exp=1722421277~hmac=52f671bfea8829ddf888709bd5f4a24e8fa66825a6bf6d96d63b5d5adad841b3&w=900",
    "https://img.freepik.com/free-photo/gen-z-person-exploring-absurdist-fashion-beauty_23-2151103996.jpg?t=st=1722417748~exp=1722421348~hmac=afd6a1ae0bcbefe1e4053d52d306260217a7cca780aaf9a6cb9498f440aa9200&w=1060"
  ];

  const testimonials = [
    {
      image:
        'https://img.freepik.com/free-photo/young-female-model-sleeping-underwear_1303-19352.jpg?t=st=1722422169~exp=1722425769~hmac=35685ddb94208c40311037502cb26376426b3cbc33b27eb848f6eb55e760543b&w=900',
      name: "Snitch",
      title: "A Tale of Two Cities",
      discryption:"demo product"
    },
    {
      image:
        'https://img.freepik.com/free-photo/young-girl-checked-shirt-pink-t-shirt-stretching-one-hand-as-holding-something-pointing-it-with-index-finger-looking-pretty-front-view_176474-87269.jpg?t=st=1722421948~exp=1722425548~hmac=dea21f1a0c2c797da71c47c2b7759c776c156174903d204458a90765727c6b1a&w=900',
         name: "Turms",
        title: "Hamlet",
      discryption: "demo product"
    },
    {
      image:
        'https://img.freepik.com/free-photo/portrait-handsome-confident-stylish-hipster-lambersexual-modelman-dressed-jacket-jeans-fashion-male-posing-studio-near-grey-wall_158538-23976.jpg?t=st=1722422130~exp=1722425730~hmac=61b990c8121ca2e83d4b61281d43000dfab80579bfeaa11079b08dd5631ef685&w=826',
      name: "Aastey",
      title: "A Tale of Two Cities",
      discryption: "demo product"
    },
    {
      image:
        'https://img.freepik.com/premium-photo/woman-smiling-with-colorful-scarf-her-head_1121404-36033.jpg?w=900',
      name: "Lea",
      title: "A Tale of Two Cities",
      discryption: "demo product"
    }
  
  ];

  return (
    <>  
      <Navbar></Navbar>

<div className="w-[100vw] overflow-x-hidden"> 
<div className="flex flex-col md:flex-row ">
        <div className="bg-white h-[60vh] md:w-[50vw] text-black border-y-2 border-red-500 ">
        <div className="  flex pl-[5vw] h-[10vh] ">
          <div className="text-4xl font-normal h-[10vh] pt-[15vh]">
            <h1 className="font-bold text-red-300 pb-[3vh]">your</h1>
            <FlipWords words={words} className="text-[8vh]" />
            <h1 className="font-bold text-red-300 pt-[3vh]">apparel shopping experience</h1>
          </div>
        </div>
    </div>
    <div className="md:w-[50vw] w-[100vw] bg-white h-[60vh]">
          <ImagesSlider className="h-[60vh] object-cover" images={images} overlay={false}>
            <motion.div
              initial={{
                opacity: 0,
                y: -80,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
              }}
              className="z-50 object-cover"
            >
             
            </motion.div>
          </ImagesSlider>
    </div>
      </div>
      <div className='flex md:flex-row gap-[10vh] md:gap-0 flex-col my-[10vh] justify-evenly text-gray-800 font-bold text-2xl text-center '>
        <WobbleCard containerClassName="w-[80vw] md:w-[25vw] bg-pink-800 h-[50vh]" className="pt-[5vh]">
            <div className="h-[50vh] w-[80vw] md:w-[25vw] bg-[url('https://img.freepik.com/premium-photo/young-woman-after-shopping-with-bags_85869-3522.jpg?w=900')] bg-cover rounded-[6vmin] pt-[30vh]">
          <h1>BOOK A HOME TRIAL</h1>
        </div>
        </WobbleCard>
        <WobbleCard containerClassName="w-[80vw] md:w-[25vw] bg-pink-800 h-[50vh]" className="pt-[5vh] text-white">
          <div className="h-[50vh] w-[80vw] md:w-[25vw] bg-blue-400 bg-[url('https://img.freepik.com/free-photo/young-indian-woman-wearing-sari_23-2149400848.jpg?t=st=1722419131~exp=1722422731~hmac=7dd0a732647594f2f56f721bd463b90e88974c75b19dc7686f33db26d035d3d5&w=900')] bg-cover rounded-[6vmin] pt-[30vh]">
          <h1>GET FASHION </h1>
          <h1>RECOMMENDATION</h1>
        </div>
        </WobbleCard>
        <WobbleCard containerClassName="w-[80vw] md:w-[25vw] bg-pink-800 h-[50vh]" className="pt-[5vh]">
            <div className="h-[50vh] w-[80vw] md:w-[25vw] bg-blue-400 bg-[url('https://img.freepik.com/free-photo/my-new-creation-soon-will-be-brought-life-focused-young-sewer-working-her-new-outfit-grabbing-scissors-while-working-workshop-with-sewing-machine-successful-tailor-keeps-receiving-orders_176420-14567.jpg?t=st=1723449823~exp=1723453423~hmac=8c72ebf71c7c11502596d63d81b171364663eff2b5ae7c04be3261f3d611df19&w=900')] bg-cover rounded-[6vmin] pt-[30vh]">
              <h1>Fitting & Alteration </h1>
        </div>
        </WobbleCard>
      </div>
      <div>
        <div className='h-[100vh] w-[100vw] bg-red-50'>
          <h1 className='pt-[5vh] text-[40px] font-normal text-center tracking-wider'>TRENDING PICKS</h1>
            <InfiniteMovingCards
              items={testimonials}
              direction="right"
              speed="fast"
              className="h-[100vh]"
            />
        </div>
        </div>
    <div>
        <div className='explore h-[68vh] w-full  flex flex-col border-b-2 border-black relative mb-[10vh]'>
          <div className='md:w-[15vw] w-[55vw] h-[14vh] absolute top-[-7vh] right-[40vw] z-20 bg-white border-2 border-black rounded-3xl'>
            <Link href={'/product'} >
              <h1 className="text-center text-3xl py-[4vh]">EXPLORE</h1></Link>
          </div>
        
          <div id="imp" className='heading flex flex-row w-[62vw] pl-[10vw] gap-[5vw] pt-[22vh] text-center'>
            <div className='flex flex-col'>
              <h1 className='font-extrabold text-[10vh]'>50+</h1>
              <h1 className='text-3xl font-bold'>BRANDS</h1>
            </div>
            <div className='flex flex-col'>
              <h1 className='font-extrabold text-[10vh]'>100+</h1>
              <h1 className='text-3xl font-bold'>CUSTOMERS</h1>
            </div>
          </div>
         <Image src={logo} alt="" className="pl-[7vw] mt-[10vh] w-[20vw]"></Image>
        </div>
    </div>
      </div>  
    </>
  );
}
