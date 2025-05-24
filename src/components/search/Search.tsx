import React, { useState } from 'react'
import { Plot } from '@/types'
import PlotsList from '../plots/PlotsList';

interface SearchProps {
  plots: Plot[];
}

const Search = ({ plots }: SearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlots = plots.filter(plot => 
    plot.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plot.headline.toLowerCase().includes(searchQuery.toLowerCase()) ||
    plot.good_point.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  return (
    <div>
      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="検索..."
        className="w-full px-4 py-2 border rounded"
      />
      {searchQuery && (
        <div className="mt-2">
          <PlotsList plots={filteredPlots}/>
        </div>
      )}
    </div>
  );
};

export default Search;