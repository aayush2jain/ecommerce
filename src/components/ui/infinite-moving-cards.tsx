"use client";

import { cn } from "@/lib/utils";
import React, { useEffect, useState } from "react";

export const InfiniteMovingCards = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        image: string;
        name: string;
        discryption: string;
    }[];
    direction?: "left" | "right";
    speed?: "fast" | "normal" | "slow";
    pauseOnHover?: boolean;
    className?: string;
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const scrollerRef = React.useRef<HTMLUListElement>(null);

    useEffect(() => {
        addAnimation();
    }, []);
    const [start, setStart] = useState(false);
    function addAnimation() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children);

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true);
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem);
                }
            })

            getDirection();
            getSpeed();
            setStart(true);
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                );
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                );
            }
        }
    };
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s");
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s");
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s");
            }
        }
    };
    return (
        <div
            ref={containerRef}
            className={cn(
                "",
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex flex-row gap-[30vw]",
                    start && "animate-scroll ",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item, idx) => (
                    <div
                        className=""
                        key={item.name}
                    >
                        <blockquote>
                           
                            <div className='relative mt-[10vh] ml-[10vw]'>
                                <div className='h-[40vh] w-[22vw] bg-red-500  top-0 absolute z-10 rounded-3xl'>
                                    <img src={item.image} className="h-[40vh] rounded-3xl" alt="d"></img>
                                </div>
                                <div className='h-[50vh] w-[20vw] bg-white text-black  top-0 left-[1vw] absolute rounded-3xl'>
                                    <h1 className="mt-[42.5vh] text-[3vh] text-center font-medium">
                                        {item.name}
                                    </h1>
                                </div>
        
                            </div>
                        </blockquote>
                    </div>
                ))}
            </ul>
        </div>
    );
};
