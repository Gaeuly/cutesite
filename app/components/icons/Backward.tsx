import Image from "next/image";

const Backward = () => {
    return (  
        <div>
            <Image src="/back.png" alt="backward buttons" width={25} height={25}
                className="hover:opacity-30 transition" 
            />
        </div>
    );
}
 
export default Backward;