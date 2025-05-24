import React, { useState } from 'react'
import { Plot } from '@/types'
import PlotsList from '../plots/PlotsList';

interface SearchProps {
  plots: Plot[];
}

const Search = ({ plots }: SearchProps) => {
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
        </div>
      )}
    </div>
  );
};

export default Search;