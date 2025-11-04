import Image from "next/image";

const Linkedin = () => {
    return (  
        <a
            href='https://www.linkedin.com/in/sye-phasuk-8aba09258'
            target="_blank" 
            rel="noopener noreferrer" 
        >
            <Image 
                src="/linkedin.png"
                alt="Linkedin"
                width={32}
                height={32}
                className="hover:opacity-30 transition"

            />
        </a>
    );
}
 
export default Linkedin;