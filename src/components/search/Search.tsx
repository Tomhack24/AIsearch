import React, { useState } from 'react'
import { Plot } from '@/types'

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
          {filteredPlots.map((plot) => (
            <div key={plot.id} className="p-2 border-b">
              <div className="font-medium">{plot.title}</div>
              <div className="text-sm text-gray-600">{plot.headline}</div>
              <div className="text-sm text-gray-600">{plot.good_point}</div>
              <div className="text-sm text-gray-600">{plot.bad_point}</div>
              <div className="text-sm text-gray-600">{plot.keyword}</div>
              <a href= {plot.url} className='text-blue-600 hover:text-blue-400 duration:200'>{plot.url}</a>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;