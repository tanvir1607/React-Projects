type TechnologyCardProps = {
    name: string;
    description: string;
    category: string;
    difficulty: string;
    rating: number;
    badge: string;
    icon: string;
    isAdded: boolean;
    onAdd: () => void;
};

const TechnologyCard = ({
  name,
  description,
  category,
  difficulty,
  rating,
  badge,
  icon,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div className="border border-gray-100 rounded-xl p-3 bg-white shadow-sm">
      <div className="flex justify-between items-start">
        <div className="w-9 h-9 flex items-center justify-center">
          <img src={icon} alt={`${name} logo`} className="w-8 h-8 object-contain"
          />
        </div>
        <span className="text-[8px] bg-blue-50 text-blue-500 px-2 py-1 rounded-full">{badge}</span>
      </div>

      <h3 className="text-sm font-semibold text-gray-900 mt-3">{name}</h3>
      <p className="text-[9px] text-gray-400 leading-4 mt-2 h-10">{description}</p>

      <div className="flex justify-between items-center mt-3">
        <span className="text-[8px] bg-gray-50 text-gray-500 px-2 py-1 rounded">{category}</span>

        <span className="text-[8px] text-gray-500">{difficulty}</span>
        <span className="text-[8px] text-gray-500">⭐ {rating}</span>
      </div>

      <button
        onClick={onAdd}
        disabled={isAdded}
        className={`w-full text-white text-[9px] py-2 rounded-md mt-3 transition ${
          isAdded
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gray-950 hover:bg-gray-800"
        }`}
      >
        {isAdded ? "Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;