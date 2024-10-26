"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import data from "../../../data/product.json";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { CardBody, CardContainer, CardItem } from "../../../components/ui/3d-card";
import Image from "next/image";
import Navbar from "@/components/navbar";
export default function Item() {
    interface ItemData {
        id: number;
        title: string;
        description: string;
        price: number;
        image: string;
    }

    // Define the state with the correct type
    const [itemData, setItemData] = useState<ItemData | null>(null);
    // const [itemData, setItemData] = useState(null);
    const params = useParams();
    const id :string = params.id[0]; // Get the id parameter from the URL
   
    useEffect(() => {
        if (id) {
            // Ensure id is properly converted to a number for comparison
            const foundItem = data.product.find(item => item.id === parseInt(id));
            setItemData(foundItem || null);
        }
    }, [id]);

    if (itemData === null) {
        // Render a loading or not found message if itemData is null
        return (
            <>
                <h1>Item not found</h1> {/* or a loading message */}
            </>
        );
    }

    return (
        <>
            <Navbar></Navbar>

            <div className="flex md:flex-row flex-col bg-white ">
                <CardContainer className="inter-var mt-0 md:mb-[30vh] md:mx-0 mx-[10vw]">
                    <CardBody className=" relative group/card w-[30vw] md:mr-[10vw] md:ml-[4vw] h-auto rounded-xl  ">
                        <CardItem rotateX={30}
                            rotateZ={-5} translateZ="100" className="md:h-[80vh] h-[60vh] md:w-[30vw] w-[80vw]  object-cover  ">
                            <img
                                src={itemData.image}
                                className="md:h-[80vh] h-[60vh] object-cover md:w-[30vw] w-[80vw] rounded-xl group-hover/card:shadow-xl"
                                alt="thumbnail"
                            ></img>
                        </CardItem>
                    </CardBody>
                </CardContainer>
                <div className="w-[60vw] h-auto mt-[10vh] md:mt-0  flex flex-col mx-[10vw] md:mx-0">
                    <h1 className="text-3xl font-bold">{itemData.title}</h1>
                    <div className="flex flex-row mt-[3vh] ">
                        <h1 className="text-3xl font-bold">${itemData.price}</h1>
                        <h1 className="text-xl text-green-500 "> 20 % off</h1>
                    </div>
                    <div className="flex flex-row">
                        <h1>MRP</h1>
                        <h1 className="text-red-400 line-through decoration-black">₹3,999</h1>
                        <h1>inclusive all taxes</h1>
                    </div>
                    {/* <div className="flex flex-row outline-dashed w-[30vw] my-[2vh]">
                        <div className="w-[10vw] bg-caret-lime-300 h-[12vh] flex flex-col justify-center items-center border-r-2 border-red-500">
                            <h1>Use code</h1>
                            <h1>V1000</h1>
                        </div>
                        <div className="w-[22vw] h-[12vh] p-1 ">
                            <h1>Get it for ₹ 2,199</h1>
                            <h1>Get flat ₹1000 off on 3999 and above</h1>
                            <h1>View all products </h1>
                        </div>

                    </div> */}
                    <h1 className="font-bold">Select Color</h1>
                    <div className="flex flex-row gap-2">
                        <MdOutlineKeyboardArrowLeft className="flex items-center justify-center h-[5vh]" />
                        <div className="h-[5vh] w-[5vh] bg-slate-500"></div>
                        <div className="h-[5vh] w-[5vh] bg-red-500"></div>
                        <div className="h-[5vh] w-[5vh] bg-green-500"></div>
                        <div className="h-[5vh] w-[5vh] bg-blue-500"></div>
                        <MdOutlineKeyboardArrowRight className="flex items-center justify-center h-[5vh]" />
                    </div>
                    <h1 className="font-bold mt-[2vh]">Select Size</h1>
                    <div className="flex flex-row gap-2">
                        <MdOutlineKeyboardArrowLeft className="flex items-center justify-center h-[5vh]" />
                        <div className="h-[5vh] w-[5vh] justify-center flex items-center outline-dashed">XS</div>
                        <div className="h-[5vh] w-[5vh] justify-center flex items-center outline-dashed">S</div>
                        <div className="h-[5vh] w-[5vh] justify-center flex items-center outline-dashed">M</div>
                        <div className="h-[5vh] w-[5vh] justify-center flex items-center outline-dashed">L</div>
                        <MdOutlineKeyboardArrowRight className="flex items-center justify-center h-[5vh]" />

                    </div>
                    <h1 className="font-bold text-xl my-[2vh]">Select Deliver Location</h1>
                    <h1>ENTER THE PINCODE OF YOUR AREA TO CHECK AVAILABILITY AND</h1>
                    <h1>DELIVERY OPTIONS</h1>
                    <input type="text" className="md:w-[30vw] w-[60vw] my-[2vh] p-[2vh] bg-slate-300 " placeholder="ENTER PIN CODE"></input>
                    <div className="flex md:flex-row flex-col gap-[2vw]">
                        <a href='/'><div className="h-[8vh] md:w-[16vw] w-[40vw] bg-pink-300 flex justify-center items-center rounded-lg">Add For Home Trial</div></a>
                        <a href='/'><div className="h-[8vh] md:w-[12vw] w-[30vw] bg-pink-300 flex justify-center items-center rounded-lg">Buy Now</div></a>
                    </div>
                    {/* <h1 className="text-xl font-bold mt-[4vh]">Product Details</h1>
                    <ul>
                        <li>Details</li>
                        <li>Details</li>
                        <li>Details</li>
                        <li>Details</li>
                        <li>Details</li>
                        <li>Details</li>
                    </ul> */}
                </div>
            </div>
        </>
    );
}