'use client'

import Image from "next/image";
import { useState } from "react";
import { ChevronRight } from "lucide-react";
import Star from "../components/icons/Star";

interface AnimeType {
  id: number;
  name: string;
  status: string;
  cover: string;
  fave_char: string;
  rating: number;
  comment: string;
}

const myAnimeList: AnimeType[] = [
  { id: 1, name: "One Piece", status: "Watching", cover: "/anime/onepiece.jpg", fave_char: "Luffy", rating: 5, comment: "Petualangan bajak laut!" },
  { id: 2, name: "One-Punch Man", status: "Finished", cover: "/anime/opm.jpg", fave_char: "Saitama", rating: 4, comment: "Pahlawan botak yang kuat." },
  { id: 3, name: "Solo Leveling", status: "Finished", cover: "/anime/solo.jpg", fave_char: "Sung Jin-Woo", rating: 5, comment: "Arise!" }
];

const AnimeCard = () => {

    const [expanded, setExpanded] = useState<number | null>(null);
    const [animeList] = useState<AnimeType[]>(myAnimeList);

    const toggle = (id: number) => {
        setExpanded(expanded === id ? null : id);
    };

    return (  
        <div className="bg-light-pink border-4 border-raspberry shadow-[4px_4px_0px_#412722] transition-all hover:shadow-[6px_6px_0px_#AE5969] font-pixelify h-[450px] flex flex-col">
            <div className="flex gap-1 justify-end p-1 bg-rosewood">
            <span className="w-2 h-2 bg-light-pink border border-plum-brown"></span>
            <span className="w-2 h-2 bg-raspberry border border-plum-brown"></span>
            <span className="w-2 h-2 bg-mauve-brown border border-plum-brown"></span>
            </div>

            <div className="flex-1 overflow-y-auto p-3">
            <h1 className="text-lg font-bold mb-4">Anime Watched</h1>
            {animeList.map((anime) => (
                <div key={anime.id} className="border-2 border-rosewood">
                <button
                    onClick={() => toggle(anime.id)}
                    className={`flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium 
                    focus:outline-none transition-colors 
                    ${expanded === anime.id ? "bg-rosewood/30" : "bg-rosewood/10 hover:bg-rosewood/50"}
                    
                    ${expanded === anime.id ? "border-b-0" : ""}`}
                >
                    <span>{anime.name}</span>
                    <ChevronRight
                    className={`h-4 w-4 transition-transform ${
                        expanded === anime.id ? "rotate-90" : ""
                    }`}
                    />
                </button>

                {expanded === anime.id && (
                    <div className="px-4 py-3 text-sm text-gray-700 bg-rosewood/30 border-x border-b border-rosewood">
                    <div className="grid grid-cols-2">
                        <div className="">
                        <Image src={anime.cover} alt={anime.name} width={100} height={200} className="object-cover"/>
                        </div>
                        <div className="px-2">
                        <Star value={anime.rating}/>
                        <p><span className="italic">Status: </span><span className="font-bold">{anime.status}</span></p>
                        <p><span className="italic">Favourite character: </span><span className="font-bold">{anime.fave_char}</span></p>
                        </div>
                    </div>
                    <div className="mt-2">{anime.comment}</div>
                    </div>
                )}
                </div>
            ))}
            </div>
        </div>
    );
}
 
export default AnimeCard;