"use client";

import React from "react";
import MusicPlayer from "./MusicPlayer";
import BookBoard from "./BookBoard";
import GameCard from "./GameCard";
import AnimeCard from "./AnimeCard";
import Recommend from "./Recommend";
import Image from "next/image";


const Dashboard = () => {
  return (
    <div className="min-h-screen max-w-4xl mx-auto px-4 flex flex-col items-center pb-16">
        <h1 className="font-jersey font-bold text-5xl pt-24 pb-6">Dashbaord</h1>

        {/* Introduction */}
        <div className="font-pixelify bg-light-pink border-4 border-rosewood shadow-[4px_4px_0px_#412722] pb-6">
            <div className="flex gap-1 justify-end p-1 bg-rosewood">
                <span className="w-2 h-2 bg-light-pink border border-plum-brown"></span>
                <span className="w-2 h-2 bg-raspberry border border-plum-brown"></span>
                <span className="w-2 h-2 bg-mauve-brown border border-plum-brown"></span>
            </div>
            <div className="elative w-full flex flex-col md:flex-row h-auto md:h-[380px] justify-start ">
                <div className="md:-mt-16 flex-shrink-0">
                    <Image
                    src="/gaeuly.png"
                    alt="sye"
                    width={380}
                    height={400}
                    className="z-10 mx-auto md:mx-0 "
                    />
                </div>

                {/* Text */}
                <div className="mt-4 md:mt-0 md:ml-6 flex flex-col justify-center text-center md:text-left">
                    <h1 className="text-3xl font-bold">gaeuly | 秋</h1>
                    <div className="flex items-center gap-2 font-pixelify justify-center md:justify-start">
                        <span className="text-gray-700">Virgo</span>
                        <span className="text-mauve-brown">❖</span>
                        <span className="text-pink-900 italic">Idn</span>
                        <span className="text-mauve-brown">❖</span>
                        <span className="text-gray-700">21</span>
                        <span className="text-mauve-brown">❖</span>
                        <span className="text-pink-900 italic">Not a dev</span>
                        <span className="text-mauve-brown">❖</span>
                        <span className="text-gray-700">SG</span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2 font-pixelify text-center md:text-left">
                        {/* Goals */}
                        <div className="p-4 ">
                            <p className="text-raspberry font-bold mb-2">Goals</p>
                            <ul className=" text-gray-700"> 
                                <li>✦ Sleeping more</li>
                                <li>✦ Fighting with errors</li>
                            </ul>
                        </div>

                        {/* Likes */}
                        <div className="">
                            <h3 className="text-raspberry font-bold mb-2 text-center pt-4">❤️</h3>
                            <ul className=" text-gray-700">
                                <li>✦ Sleeping</li>
                                <li>✦ Music</li>
                                <li>✦ Indonesian</li>
                            </ul>
                        </div>

                        {/* Dislikes */}
                        <div className=" ">
                            <h3 className="text-raspberry font-bold mb-2 text-center pt-4">❤️‍🩹</h3>
                            <ul className=" text-gray-700 ">
                                 <li>✦ Coding</li>
                            </ul>
                        </div>

                    </div>
                </div>  
            </div>
        </div>

        <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12">
            <div className="md:col-span-2">
                <BookBoard/>
            </div>

            <AnimeCard/>

            <div className="flex justify-center items-center">
                <MusicPlayer/>
            </div>

            <div className="md:col-span-2 h-full">
                <GameCard/>
            </div>
            <div className="md:col-span-2">
                <Recommend/>
            </div>


        </div>
    </div>
  );
};

export default Dashboard;