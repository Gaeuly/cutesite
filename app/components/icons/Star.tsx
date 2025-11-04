interface RatingProps {
  value: number; // e.g. 3.5
  max?: number;  // default 5
}

const PixelStar = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    className="w-6 h-6"
    shapeRendering="crispEdges" // <-- pixel feel
  >
    <path
      d="M12 2L15 9h7l-6 5 2 8-6-4-6 4 2-8-6-5h7z"
      fill={filled ? "#AE5969" : "none"}
      stroke="#412722"
      strokeWidth="2"
    />
  </svg>
);

const PixelStarHalf = () => (
  <div className="relative w-6 h-6">
    {/* Empty star outline */}
    <PixelStar filled={false} />
    {/* Filled half */}
    <div className="absolute inset-0 overflow-hidden w-1/2">
      <PixelStar filled={true} />
    </div>
  </div>
);

const Star: React.FC<RatingProps> = ({ value, max = 5 }) => {
    const stars = [];
    for (let i = 1; i <= max; i++) {
        if (value >= i) {
        stars.push(<PixelStar key={i} filled />);
        } else if (value >= i - 0.5) {
        stars.push(<PixelStarHalf key={i} />);
        } else {
        stars.push(<PixelStar key={i} filled={false} />);
        }
    }

  return <div className="flex gap-1">{stars}</div>;
};

export default Star;