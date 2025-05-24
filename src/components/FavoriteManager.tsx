import { useEffect, useState } from "react";
import Search from "@/components/search/Search";
import { getAllPlots } from "../../lib/supabaseFunction";
import { Plot } from "@/types";

const FavoriteManager = () => {
  const [plots, setPlots] = useState<Plot[]>([]);
  const [favorites, setFavorites] = useState<string[]>(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("favorites");
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    const getPlots = async () => {
      const plots = await getAllPlots();
      setPlots(plots ?? []);
    };
    getPlots();
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (id: string) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fid) => fid !== id) : [...prev, id]
    );
  };

  const displayedPlots = showFavorites
    ? plots.filter((plot) => favorites.includes(plot.id))
    : plots;

  return (
    <>
      <div className="mb-4">
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => setShowFavorites((prev) => !prev)}
        >
          {showFavorites ? "すべて表示" : "お気に入りだけ表示"}
        </button>
      </div>
      <div>
        {showFavorites && displayedPlots.length === 0 ? (
          <div className="text-gray-500 text-center my-8">
            お気に入りが登録されていません
          </div>
        ) : (
          <Search
            plots={displayedPlots}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        )}
      </div>
    </>
  );
};

export default FavoriteManager;