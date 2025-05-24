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
  const [inputValue, setInputValue] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [isEnterPressed, setIsEnterPressed] = useState(false);

  const filteredPlots = plots.filter(plot => 
    plot.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plot.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plot.good_point.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plot.keyword.some(k => k.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setSearchQuery(inputValue);
      setIsEnterPressed(true);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setInputValue(e.target.value)
        }}
        onKeyDown={handleKeyDown}
        placeholder="検索..."
        className="w-full px-4 py-2 border rounded"
      />

      {isEnterPressed && searchQuery && (
        <div className="mt-2">
          {filteredPlots.length === 0 ? (
            <div className="text-center p-4 bg-gray-50 rounded-lg">
              <p className="text-gray-600 mb-3">検索結果が見つかりませんでした</p>
              <div className='flex items-center'>
                <p className='text-sm mr-2'>ヒント :</p>
                <TagSearch plots={plots} setSearchQuery={setSearchQuery}/>
              </div>
            </div>
          ) : (
          <div className='my-3 '>
            <div className="flex items-center my-4">
              <div className="flex-grow border-t border-gray-500"></div>
              <span className="mx-4 text-gray-500 whitespace-nowrap">
                  {filteredPlots.length}個のAIが見つかりました
              </span>
              <div className="flex-grow border-t border-gray-500"></div>
            </div>
            <PlotsList
              plots={filteredPlots}
              favorites={favorites}
              toggleFavorite={toggleFavorite}
              highlight={searchQuery}
            />
          </div>
          )}
        </div>
      )}

      {!searchQuery && (
        <div className="mt-2">
          <PlotsList
            plots={plots}
            favorites={favorites}
            toggleFavorite={toggleFavorite}
            // highlightは未入力時は不要
          />
        </div>
      )}
    </div>
  )
};

export default Search;