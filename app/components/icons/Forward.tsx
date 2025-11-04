import Image from "next/image";

const Forward = () => {
    return (  
        <div>
            <Image src="/forward.png" alt="forward button" width={25} height={25}
                className="hover:opacity-30 transition"
            />
        </div>
    );
}
 
export default Forward;