import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Link from "next/link";

const BlogFull = () => {
    const postsDir = path.join(process.cwd(), "content");
    const files = fs.readdirSync(postsDir);

    const posts = files.map((file) => {
        const filePath = path.join(postsDir, file);
        const fileContents = fs.readFileSync(filePath, "utf-8");
        const { data } = matter(fileContents);

        return {
            slug: file.replace(".md", ""),
            title: data.title,
            date: data.date,
            description: data.description,
        };
    });

    return (  
        <div className="max-w-2xl mx-auto px-4 flex flex-col items-center pb-24">
            <h1 className="font-jersey font-bold text-5xl pt-24 pb-6">Blog</h1>
            <p className="font-pixelify text-center mb-12">
                Welcome to my blog! Here I write about my journey as a Discord Bot Developer and Minecraft Server Manager. 🤖⛏️
            </p>

            <ul className="space-y-6">
                {posts.map((post) => (
                    <li key={post.slug} className="group relative font-pixelify"
                    >
                        <Link href={`/blog/${post.slug}`}>
                            <div className="
                            p-5 
                            border-4 border-raspberry 
                            bg-white 
                            shadow-[6px_6px_0px_#412722] 
                            hover:shadow-[8px_8px_0px_#AE5969]
                            transition-all 
                            duration-200 
                            cursor-pointer
                            ">

                            <div className="bg-raspberry text-light-pink px-2 py-1 flex items-center justify-between text-xs mb-3">
                            <span className="font-bold">blog_post.txt</span>
                            <div className="flex gap-1">
                                <span className="w-3 h-3 bg-rosewood border border-plum-brown"></span>
                                <span className="w-3 h-3 bg-light-pink border border-plum-brown"></span>
                                <span className="w-3 h-3 bg-mauve-brown border border-plum-brown"></span>
                            </div>
                            </div>
                                <h2 className="text-xl font-bold text-raspberry group-hover:text-mauve-brown transition-colors">
                                    {post.title}
                                </h2>
                                <p className="text-xs text-plum-brown mb-2">{post.date}</p>
                                <p className="text-sm text-mauve-brown group-hover:text-rosewood transition-colors">
                                    {post.description}
                                </p>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
 
export default BlogFull;