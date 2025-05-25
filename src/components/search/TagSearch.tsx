import { Plot } from '@/types';
import React from 'react'

interface SearchProps {
  plots: Plot[];
  setSearchQuery: (query: string) => void;
}

const TagSearch = ({ plots, setSearchQuery }: SearchProps) => {

    const allKeywords = plots.flatMap(plot => plot.keyword);
    const uniqueKeywords = Array.from(new Set(allKeywords))
    const shuffled = [...uniqueKeywords].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0,3);

    return (
        <div>
            {selected.map((keyword, idx) => (
                <button
                  key={idx}
                  className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full"
                  onClick={() => setSearchQuery(keyword.trim())}
                >
                    {keyword.trim()}
                </button>
            ))}
        </div>
    )
}

export default TagSearch
