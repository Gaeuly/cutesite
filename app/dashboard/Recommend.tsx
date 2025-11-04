// import { useEffect } from "react"; // Dinonaktifkan karena useEffect tidak dipakai
// import { supabase } from "@/lib/supabaseClient"; // Dinonaktifkan
import { useState } from "react";


// Interface ini bisa kita nonaktifkan juga karena datanya gak di-load
/*
interface RecommendType {
    id: number;
    name: string;
    comment: string;
}
*/

const Recommend = () => {
    // tipenya jadi any[] dan biarkan kosong
    const [recommendList, setRecommendList] = useState<any[]>([]);
    const [newTitle, setNewTitle] = useState("");
    const [newComment, setNewComment] = useState("");
    // const [loading, setLoading] = useState(true);

    /*
    // Fetch data - Dinonaktifkan
    useEffect(() => {
        const fetchRecommendations = async () => {
        const { data, error } = await supabase
            .schema("SyePhasuk") 
            .from("Recommend") 
            .select("*");

        if (error) {
            console.error("Error fetching recommendations:", error);
        } else {
            setRecommendList(data || []);
        }
        setLoading(false);
        };

        fetchRecommendations();
    }, []);
    */

    /*
    // Insert new data - Dinonaktifkan 
    const addRecommendation = async () => {
        const { data, error } = await supabase
            .schema("SyePhasuk")
            .from("Recommend")
            .insert([{ name: newTitle, comment: newComment }])
            .select();

        if (error) {
            console.error("Error inserting recommendation:", error);
        } else {
            setRecommendList((prev) => [...prev, ...(data || [])]);
            setNewTitle("");
            setNewComment("");
        }
    };
    */

    // if (loading) {
    //     return <p className="text-center text-gray-500">Loading recommendations...</p>;
    // }

    return (  
        <div className="bg-light-pink border-4 border-raspberry shadow-[4px_4px_0px_#412722] transition-all hover:shadow-[6px_6px_0px_#AE5969] font-pixelify">
            <div className="flex gap-1 justify-end p-1 bg-rosewood">
                <span className="w-2 h-2 bg-light-pink border border-plum-brown"></span>
                <span className="w-2 h-2 bg-raspberry border border-plum-brown"></span>
                <span className="w-2 h-2 bg-mauve-brown border border-plum-brown"></span>
            </div>
            <div className="p-3">
                <h1 className="text-lg font-bold mb-2">TBR/TBW</h1>
                <ul className="space-y-1 py-2">
                {recommendList.map((rec) => (
                    <li key={rec.id} className="border-b border-rosewood/40 pb-1">
                    {rec.name} <p className="italic text-xs">{rec.comment}</p>
                    </li>
                ))}

                <p className="mt-4">Feel free to give me some recommendations!</p>
                
                <div className="flex flex-col md:flex-row gap-2 mb-3">
                    <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        className="flex-1 border-2 border-rosewood px-2 py-1 bg-light-pink"
                        placeholder="Add new recommendation..."
                    />
                    <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="flex-1 border-2 border-rosewood px-2 py-1 bg-light-pink"
                        placeholder="Add your comments..."
                    />
                    <button
                        // onClick={addRecommendation} // onClick dinonaktifkan
                        disabled // Tombol jadi disabled
                        className="px-3 py-1 bg-rosewood text-light-pink border-2 border-plum-brown hover:bg-rosewood/80 disabled:opacity-50"
                    >
                        Add
                    </button>
                </div>

                </ul>
            </div>
        </div>
    );
}
 
export default Recommend;