import Image from "next/image";


interface PlayProps {
  url: string;
}


const Play: React.FC<PlayProps> = ({ url }) => {
    return (  
        <a href={url} target="_blank" rel="noopener noreferrer" >
            <Image src="/play.png" alt="play button" width={32} height={32}
                className="hover:opacity-30 transition"
            />
        </a>
    );
}
 
export default Play;