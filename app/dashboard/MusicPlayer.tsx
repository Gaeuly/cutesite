"use client";
import Image from "next/image";

import React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Forward from "../components/icons/Forward";
import Backward from "../components/icons/Backward";
import Play from "../components/icons/Play";

const MusicPlayer = () => {
    const songs = [
        { title: "Nod Krai Theme", artist: "Aurora", url: "https://youtu.be/RuXa_yxZMGI?si=KL1ezMZpqlJYN9ew", cover: "/aurora.avif"},
        { title: "My Way", artist: "KATSEYE", url: "https://youtu.be/1P8BbTY8gWo?si=_GPfk2cFmIXiAT7C", cover: "/katseye.jpg"},
        { title: "Forbidden Friendship", artist: "John Powell", url: "https://youtu.be/96NgGuKQcmo?si=UHYxF9EAiPZa2p_h", cover: "/httyd.jpg"},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % songs.length);
    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + songs.length) % songs.length);

    const currentSong = songs[currentIndex];

    return (
        <div className="w-50 bg-light-pink border-4 border-raspberry shadow-[4px_4px_0px_#412722] font-pixelify transition-all hover:shadow-[6px_6px_0px_#AE5969]">
            <div className="flex gap-1 justify-end p-1 bg-rosewood">
                <span className="w-2 h-2 bg-light-pink border border-plum-brown"></span>
                <span className="w-2 h-2 bg-raspberry border border-plum-brown"></span>
                <span className="w-2 h-2 bg-mauve-brown border border-plum-brown"></span>
            </div>
            <div className="p-3">
                {/* Album Art */}
                <h2 className="text-lg font-bold mb-2">Now Playing</h2>

                {/* Animate cover art + text */}
                <div className="h-auto flex items-center justify-center mb-3 overflow-hidden">
                    <AnimatePresence mode="wait">
                    <motion.div
                        key={songs[currentIndex].title}
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -100, opacity: 0 }}
                        transition={{ duration: 0.4 }}
                        className="w-full"
                    >
                        <Image
                            src={songs[currentIndex].cover}
                            alt={songs[currentIndex].title}
                            className="w-42 h-42 mx-auto object-cover image-pixelated border-2 border-mauve-brown"
                        />
                        <p className="mt-2 text-sm">{songs[currentIndex].title}</p>
                        <p className="text-xs text-pink-800">{songs[currentIndex].artist}</p>
                    </motion.div>
                    </AnimatePresence>
                </div>

                {/* Progress bar */}
                <div className="mt-3 h-2 w-full border-2 border-plum-brown bg-rosewood relative">
                    <div className="h-full bg-raspberry" style={{ width: "40%" }}></div>
                </div>

                {/* Button controls */}
                <div className="flex justify-center gap-3 items-center py-5">
                    <button onClick={handlePrev} className="px-2 py-1hover:translate-y-[2px]"> <Backward /> </button>
                    <Play url={currentSong.url}/>
                    <button onClick={handleNext} className="px-2 py-1hover:translate-y-[2px]"> <Forward/> </button>
                    
                </div>

            </div>
        </div>
    );
};

export default MusicPlayer;