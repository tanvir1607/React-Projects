import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type Technology = {
  id: string;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: string;
  badge: string;
};

type SelectedTechnology = {
  name: string;
  category: string;
  icon: string;
};

const Technologies = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<SelectedTechnology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        const response = await fetch("/data.json");
        const data = await response.json();

        setTechnologies(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        toast.error("Failed to load technologies.");
      }
    };

    loadTechnologies();
  }, []);

  const addToStack = (
    name: string,
    category: string,
    icon: string
  ) => {
    const alreadyAdded = stack.some(
      (technology) => technology.name === name
    );

    if (alreadyAdded) {
      toast.warning(`${name} is already in your stack!`);
      return;
    }

    const newTechnology = {
      name: name,
      category: category,
      icon: icon,
    };

    setStack([...stack, newTechnology]);

    toast.success(`${name} added to your stack!`);
  };

  const removeFromStack = (name: string) => {
    const newStack = stack.filter(
      (technology) => technology.name !== name
    );

    setStack(newStack);

    toast.info(`${name} removed from your stack.`);
  };

  const removeAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info("All technologies removed from your stack.");
  };

  const isAdded = (name: string) => {
    return stack.some(
      (technology) => technology.name === name
    );
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-10">
      <ToastContainer
        position="bottom-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        theme="light"
      />

      <div className="mb-7">
        <h1 className="text-2xl font-bold text-gray-900">
          Explore the{" "}
          <span className="text-pink-500">
            Technologies
          </span>
        </h1>

        <p className="text-xs text-gray-400 mt-1">
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {loading ? (
        <div className="flex flex-col items-center justify-center py-20">
          <div className="w-8 h-8 border-4 border-gray-200 border-t-gray-900 rounded-full animate-spin"></div>

          <p className="text-sm text-gray-500 mt-3">
            Loading technologies...
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                name={technology.name}
                description={technology.description}
                category={technology.category}
                difficulty={technology.difficulty}
                rating={technology.rating}
                badge={technology.badge}
                icon={technology.icon}
                isAdded={isAdded(technology.name)}
                onAdd={() =>
                  addToStack(
                    technology.name,
                    technology.category,
                    technology.icon
                  )
                }
              />
            ))}
          </div>

          <div className="border border-gray-100 rounded-xl p-3 h-fit">
            <h3 className="text-sm font-semibold text-gray-900">
              Your Stack
            </h3>

            <p className="text-[9px] text-gray-400 mt-1">
              {stack.length === 0
                ? "No technologies selected yet."
                : `${stack.length} technologies selected.`}
            </p>

            {stack.length === 0 ? (
              <div className="border border-dashed border-gray-200 rounded-lg h-10 mt-3 flex items-center justify-center">
                <p className="text-[8px] text-gray-300">
                  Your stack is empty.
                </p>
              </div>
            ) : (
              <>
                <div className="mt-3 space-y-2">
                  {stack.map((technology) => (
                    <div
                      key={technology.name}
                      className="border border-gray-100 rounded-lg p-2 flex items-center justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={technology.icon}
                          alt={`${technology.name} logo`}
                          className="w-6 h-6 object-contain"
                        />

                        <div>
                          <h4 className="text-[9px] font-semibold text-gray-800">
                            {technology.name}
                          </h4>

                          <p className="text-[8px] text-gray-400">
                            {technology.category}
                          </p>
                        </div>
                      </div>

                      <button
                        onClick={() =>
                          removeFromStack(technology.name)
                        }
                        className="text-gray-400 hover:text-red-500 text-sm"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>

                <button
                  onClick={removeAll}
                  className="w-full mt-3 border border-red-200 text-red-500 hover:bg-red-50 text-[9px] py-2 rounded-md transition"
                >
                  Remove All
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default Technologies;
