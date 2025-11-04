import Github from "../components/icons/Github";
import Youtube from "../components/icons/Youtube";
import Discord from "../components/icons/Discord";

const Hero = () => {
  return (
    <div className="w-screen h-screen flex flex-col md:flex-row">
      <div className="relative h-full flex flex-col justify-center items-center px-12 w-full">
        <p className="text-gray-500 font-pixelify text-xl md:text-2xl">
          Hello! I am
        </p>
        <h1
          data-aos="fade-up"
          data-aos-once="false"
          className="text-raspberry text-8xl font-jersey font-bold text-center md:text-right md:text-9xl"
        >
          Gaeuly
        </h1>
        <div className="mt-5 flex flex-wrap gap-5">
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
            href="https://www.youtube.com/@Gaeuly"
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
    </div>
  );
};

export default Hero;