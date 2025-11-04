import Image from "next/image";
import { useState } from "react";
import Book from "../components/Book";
// import { supabase } from "@/lib/supabaseClient"; // Dinonaktifkan
// import { useEffect } from "react"; // Dinonaktifkan

interface BookType {
  id: number;
  title: string;
  author: string;
  cover: string;
  comment: string;
}

// Data buku hardcode sesuai permintaan
const myBooks: BookType[] = [
    { 
      id: 1, 
      title: "Renegade Immortal", 
      author: "Er Gen", 
      cover: "/book/xiani.webp", 
      comment: "Perjalanan Wang Lin di jalan immortal." 
    },
    { 
      id: 2, 
      title: "I Shall Seal the Heavens", 
      author: "Er Gen", 
      cover: "/book/issth.webp", 
      comment: "Meng Hao, si Cendekiawan penipu." 
    },
    { 
      id: 3, 
      title: "Lord of the Mysteries", 
      author: "Cuttlefish That Loves Diving", 
      cover: "/book/lotm.jpg", 
      comment: "Praise The Fool!" 
    },
];

const BookBoard = () => {
    // Langsung isi state dengan data hardcode
    const [books, setBooks] = useState<BookType[]>(myBooks);
    // Untuk buku yang dipilih
    const [selectedBook, setSelectedBook] = useState<BookType | null>(null);

    /*
    // Fetch data on mount - Dinonaktifkan
    useEffect(() => {
        const fetchBooks = async () => {
        const { data, error } = await supabase
            .schema("SyePhasuk")
            .from("Bookshelf")
            .select("*");

        if (error) {
            console.error("Error fetching books:", error);
        } else {
            setBooks(data || []);
        }
        };

        fetchBooks();
    }, []);
    */
    
    return (  
        
        <div className="bg-light-pink border-4 border-raspberry shadow-[4px_4px_0px_#412722] transition-all hover:shadow-[6px_6px_0px_#AE5969] font-pixelify">
            <div className="flex gap-1 justify-end p-1 bg-rosewood">
                <span className="w-2 h-2 bg-light-pink border border-plum-brown"></span>
                <span className="w-2 h-2 bg-raspberry border border-plum-brown"></span>
                <span className="w-2 h-2 bg-mauve-brown border border-plum-brown"></span>
            </div>
            <div className="p-3">
                <h1 className="text-lg font-bold mb-2">Books Read</h1>
            </div>

            {/* Shelf */}
            <div className="flex gap-2 overflow-x-auto px-4 ">
                <div className="flex w-full overflow-x-auto px-4 items-end border-b-8 border-rosewood pt-3">
                {books.map((book) => (
                    <Book key={book.id} onClick={() => setSelectedBook(book)} />
                ))}
                <div>
                    <Image src="/flowerpot.png" alt="flowerpot" width={90} height={38} />
                </div>
                </div>
            </div>


            {/* Info panel */}
            <div className="min-h-[150px] flex items-center justify-center text-center border-rosewood pt-4 ">
                {selectedBook ? (
                <div className="flex flex-col md:flex-row gap-3 items-center justify-evenly md:items-start p-4 ">
                    {/* Image column */}
                    <div className="flex justify-center items-center">
                    <Image
                        src={selectedBook.cover}
                        alt="book cover"
                        width={100}
                        height={150}
                        className="border-2 border-rosewood shadow-md"
                    />
                    </div>

                    {/* Info column */}
                    <div className="md:w-30 ">
                    <h3 className="text-lg font-bold">{selectedBook.title}</h3>
                    <p className="italic text-rosewood">by {selectedBook.author}</p>
                    </div>

                    {/* Comments column */}
                    <div className="md:w-1/2">
                    <p className="font-semibold text-mauve-brown">Thoughts</p>
                    <p className="mt-2 text-gray-700">{selectedBook.comment}</p>
                    </div>
                </div>
                ) : (
                <p className="text-gray-500 italic">Click a book to see details...</p>
                )}
            </div>

        </div>
    );
}
 
export default BookBoard;