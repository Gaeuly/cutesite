import React, { useMemo } from "react";

interface BookProps {
  onClick?: () => void;
}

const bookStyles = [
  "w-10 h-36 bg-raspberry relative before:content-[''] before:absolute before:top-2 before:left-2 before:w-6 before:h-1 before:bg-ocean",
  "w-12 h-28 bg-raspberry relative before:content-[''] before:absolute before:top-4 before:left-1 before:w-10 before:h-1 before:bg-light-pink after:content-[''] after:absolute after:top-8 after:left-1 after:w-10 after:h-1 after:bg-light-pink",
  "w-8 h-32 bg-ocean relative before:content-[''] before:absolute before:top-1/2 before:left-0 before:w-full before:h-2 before:bg-mauve-brown",
  "w-10 h-40 bg-mauve-brown relative before:content-[''] before:absolute before:top-4 before:left-3 before:w-1 before:h-1 before:bg-ocean",
  "w-6 h-28 bg-ocean relative before:content-[''] before:absolute before:bottom-2 before:left-0 before:w-full before:h-2 before:bg-rosewood",
  "w-12 h-40 bg-rosewood relative before:content-[''] before:absolute before:top-1/3 before:left-0 before:w-full before:h-2 before:bg-mauve-brown after:content-[''] after:absolute after:top-2/3 after:left-0 after:w-full after:h-2 after:bg-ocean",
  "w-8 h-40 bg-raspberry relative before:content-[''] before:absolute before:top-6 before:left-2 before:w-1 before:h-1 before:bg-amber-300 after:content-[''] after:absolute after:top-10 after:left-4 after:w-1 after:h-1 after:bg-amber-300",
  "w-10 h-32 bg-ocean relative before:content-[''] before:absolute before:top-2 before:left-0 before:w-full before:h-2 before:bg-mauve-brown after:content-[''] after:absolute after:bottom-2 after:left-0 before:w-full before:h-2 after:bg-mauve-brown",
  "w-10 h-28 bg-raspberry relative before:content-[''] before:absolute before:top-1/2 before:left-1/3 before:w-4 before:h-4 before:bg-mauve-brown",
  "w-12 h-40 bg-mauve-brown relative before:content-[''] before:absolute before:top-6 before:left-0 before:w-full before:h-1 before:bg-light-pink after:content-[''] after:absolute after:top-12 after:left-0 before:w-full before:h-1 after:bg-ocean",
];

const Book: React.FC<BookProps> = ({ onClick }) => {
  // useMemo ensures we only pick the random style once per mount
  const randomStyle = useMemo(() => {
    return bookStyles[Math.floor(Math.random() * bookStyles.length)];
  }, []);

  return (
    <div
      onClick={onClick}
      className={`${randomStyle} cursor-pointer hover:-translate-y-1 transition-transform`}
    />
  );
};

export default Book;