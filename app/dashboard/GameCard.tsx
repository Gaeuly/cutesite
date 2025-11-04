import Image from "next/image";

const GameCard = () => {
    return (  
        <div className="bg-light-pink border-4 border-raspberry shadow-[4px_4px_0px_#412722] transition-all hover:shadow-[6px_6px_0px_#AE5969] font-pixelify">
            <div className="flex gap-1 justify-end p-1 bg-rosewood h-full">
                <span className="w-2 h-2 bg-light-pink border border-plum-brown"></span>
                <span className="w-2 h-2 bg-raspberry border border-plum-brown"></span>
                <span className="w-2 h-2 bg-mauve-brown border border-plum-brown"></span>
            </div>
            <div className="p-3">
                <h1 className="text-lg font-bold mb-2">Games Played</h1>
                <div className="border-b-2 border-raspberry py-2">
                    <h2 className="font-bold">League of Legends</h2>
                    <div className=" grid grid-cols-2">
                        <div>
                            <p>Main:</p>
                            <Image
                                src="/games/hero.jpg"
                                alt="layla"
                                width={200}
                                height={200}
                                className="object-cover w-500px] h-[100px]"
                            />
                        </div>
                        <div>
                            <p>Favourite skin:</p>
                            <Image
                                src="/games/skin.jpg"
                                alt="myskin"
                                width={200}
                                height={200}
                                className="object-cover w-[290px] h-[100px]"
                            />
                        </div>
                    </div>
                </div>
                <div className="py-2">
                    <h2 className="font-bold">Minecraft</h2>
                    <p>{"A collection of houses I've built ✨"}</p>
                    <div className="flex flex-wrap gap-2 mt-2">
                        <Image src="/games/mc1.png" alt="Minecraft build" width={120} height={80} className="object-cover border border-rosewood"/>
                        <Image src="/games/mc2.png" alt="Minecraft base" width={120} height={80} className="object-cover border border-rosewood"/>
                        <Image src="/games/mc3.png" alt="Minecraft base" width={120} height={80} className="object-cover border border-rosewood"/>
                        <Image src="/games/mc4.png" alt="Minecraft base" width={120} height={80} className="object-cover border border-rosewood"/>
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default GameCard;