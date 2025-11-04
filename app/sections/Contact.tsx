import Github from "../components/icons/Github";
import Youtube from "../components/icons/Youtube";
import Discord from "../components/icons/Discord";

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 flex flex-col items-center pb-32">
      <h1 className="font-jersey font-bold text-5xl py-12">Contact Me</h1>
      <p className="font-pixelify text-center leading-relaxed">
        Say hello! I love connecting with new people and hearing fresh ideas,
        whether it’s about tech, art, or anything in between. Don’t hesitate to
        reach out 💖🥰
      </p>
      <div className="mt-12 flex flex-wrap gap-5">
        <a
          href="https://github.com/Gaeuly"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub Profile"
          className="text-gray-700 hover:text-raspberry transition-colors duration-200"
        >
          <Github className="w-8 h-8" />
        </a>
        <a
          href="https://www.youtube.com/@Gaeuly/videos"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube Channel"
          className="text-gray-700 hover:text-raspberry transition-colors duration-200"
        >
          <Youtube className="w-8 h-8" />
        </a>
        <a
          href="https://discord.gg/FnEe7xcYZQ"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Discord Server"
          className="text-gray-700 hover:text-raspberry transition-colors duration-200"
        >
          <Discord className="w-8 h-8" />
        </a>
      </div>
    </div>
  );
};

export default Contact;