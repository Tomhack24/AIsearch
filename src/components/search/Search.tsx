import React, { useState } from 'react'
import { Plot } from '@/types'
import PlotsList from '../plots/PlotsList';
import TagSearch from './TagSearch';

interface SearchProps {
  plots: Plot[];
  favorites: string[];
  toggleFavorite: (id: string) => void;
}

const Search = ({ plots, favorites, toggleFavorite }: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isEnterPressed, setIsEnterPressed] = useState(false);

  const filteredPlots = plots.filter(plot => 
    plot.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plot.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plot.good_point.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEnterPressed(true);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => {
          setSearchQuery(e.target.value);
          setIsEnterPressed(false);
        }}
        onKeyDown={handleKeyDown}
        placeholder="検索..."
        className="w-full px-4 py-2 border rounded"
      />

      {isEnterPressed && searchQuery && (
        <div className="mt-2">
          {filteredPlots.length === 0 ? (
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600 mb-2">検索結果が見つかりませんでした</p>
              <p className="text-sm text-gray-500">別のキーワードで検索してみてください</p>
            </div>
          ) : (
            <PlotsList plots={filteredPlots}/>
          )}

      <div className='flex items-center'>
        <p className='text-sm mr-2'>ヒント :</p>
      <TagSearch plots={plots} setSearchQuery={setSearchQuery}/>
      </div>
      {searchQuery && (
        <div className="mt-2">
          <PlotsList
            plots={filteredPlots}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        </div>
      )}
      {!searchQuery && (
        <div className="mt-2">
          <PlotsList
            plots={plots}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
          />
        </div>
      )}
    </div>
  );
};

export default Search;