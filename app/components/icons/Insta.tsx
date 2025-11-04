import Image from "next/image";

const Insta = () => {
    return (  
        <a
            href='https://www.instagram.com/starry.sye'
            target="_blank" 
            rel="noopener noreferrer" 
        >
            <Image 
                src="/insta.png"
                alt="instagram"
                width={32}
                height={32}
                className="hover:opacity-30 transition"
            />
        </a>
    );
}
 
export default Insta;