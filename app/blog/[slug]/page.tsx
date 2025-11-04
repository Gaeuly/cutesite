import fs from "fs";
import path from "path";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";


export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "content");
  const files = fs.readdirSync(postsDir);

  return files.map((file) => ({
    slug: file.replace(".md", ""),
  }));
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default async function BlogPost({ params }: any) {
  const { slug } = await params;
  const filePath = path.join(process.cwd(), "content", slug + ".md");
  const fileContents = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileContents);

  return (
    <article className="min-h-screen max-w-5xl mx-auto px-4 mt-24 flex flex-col items-center">
      <h1 className="font-jersey font-bold text-5xl">{data.title}</h1>
      <p className="text-sm text-gray-500">{data.date}</p>
      <div className="py-12 w-full text-plum-brown">
        <ReactMarkdown
          components={{
            p: ({ children }) => (
              <p className="mb-6 leading-relaxed">{children}</p>
            ),
            h2: ({ children }) => (
              <h2 className="mt-10 mb-4 text-2xl font-jersey text-raspberry">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="mt-8 mb-3 text-xl font-jersey text-rosewood">
                {children}
              </h3>
            ),
            ul: ({ children }) => (
              <ul className="list-disc pl-6 space-y-2">{children}</ul>
            ),
          }}
        >
          {content}
        </ReactMarkdown>
      </div>
    </article>
  );
}