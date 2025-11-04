import { useState } from "react";
import Image from "next/image";

interface GalleryCardProps {
  image: string;       // URL of the artwork
  caption?: string;    // Optional caption/title
  className?: string;

}

  
const GalleryCard: React.FC<GalleryCardProps> = ({ image, caption, className = "", }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Card */}
      <div
        onClick={() => setIsOpen(true)}
        className={`
          p-3
          border-3 border-raspberry 
          bg-white 
          shadow-[6px_6px_0px_#412722] 
          hover:shadow-[8px_8px_0px_#AE5969]
          transition-all 
          duration-200 
          cursor-pointer font-pixelify ${className}
        `}
      >
        {/* Pixel "window bar" */}
        <div className="bg-raspberry text-light-pink px-2 py-1 flex items-center justify-between text-xs mb-3 ">
          <span className="font-bold">gallery.png</span>
          <div className="flex gap-1">
            <span className="w-3 h-3 bg-rosewood border border-plum-brown"></span>
            <span className="w-3 h-3 bg-light-pink border border-plum-brown"></span>
            <span className="w-3 h-3 bg-mauve-brown border border-plum-brown"></span>
          </div>
        </div>

        {/* Image */}
        <Image
          src={image}
          alt={caption || "Artwork"}
          width={400}
          height={500}
          className="h-auto object-contain border-2 border-raspberry"
        />
      </div>

      {/* Pixel Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 font-pixelify">
          <div className="relative p-2 bg-white border-8 border-raspberry shadow-[8px_8px_0px_#412722] max-w-[90%] max-h-[90%]">
            
            {/* Pixel window bar */}
            <div className="bg-raspberry text-light-pink px-2 py-1 flex items-center justify-between text-xs mb-3">
              <span className="font-bold">fullsize.png</span>
              <button
                className="w-4 h-4 bg-rosewood border border-plum-brown text-[10px] flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                ✕
              </button>
            </div>

            {/* Full image */}
            <Image
              src={image}
              alt={caption || "Full Artwork"}
              className="max-w-full max-h-[80vh] object-contain border-4 border-rosewood"
            />

          </div>
        </div>
      )}
    </>
  );
};

export default GalleryCard;