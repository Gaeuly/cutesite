interface EssayCardProps {
  date: string;
  title: string;
  description: string;
}

const EssayCard: React.FC<EssayCardProps> = ({ date, title, description }) => {
  return (
    <div className="p-5 border-4 border-raspberrybg-white shadow-[6px_6px_0px_#412722] hover:shadow-[8px_8px_0px_#AE5969] transition-all duration-200 cursor-pointer font-pixelify">
      <div className="bg-raspberry text-light-pink px-2 py-1 flex items-center justify-between text-xs mb-3">
        <span className="font-bold">essay.txt</span>
        <div className="flex gap-1">
            <span className="w-3 h-3 bg-rosewood border border-plum-brown"></span>
            <span className="w-3 h-3 bg-light-pink border border-plum-brown"></span>
            <span className="w-3 h-3 bg-mauve-brown border border-plum-brown"></span>
        </div>
      </div>
      <h2 className="text-xl font-bold text-raspberry group-hover:text-mauve-brown transition-colors">{title}</h2>
      <p className="text-xs text-plum-brown mb-2">{date}</p>
      <p className="text-sm text-mauve-brown group-hover:text-rosewood transition-colors">
          {description}
      </p>

    </div>
  );
};

export default EssayCard;