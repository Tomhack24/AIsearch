import { Plot } from '@/types'
import React from 'react'
import PlotDetail from './PlotDetail';

interface PlotsListProps {
  plots: Plot[];
  favorites: string[];
  toggleFavorite: (id: string) => void;
  highlight?: string;
}

const PlotsList = ({ plots, favorites, toggleFavorite, highlight }: PlotsListProps) => {
    return (
        <ul className='flex flex-wrap justify-center items-start  m-5 mb-20 py-5 max-w-[1200px]  shadow-md rounded-4xl'>
            {plots.map((plot) => (
                <PlotDetail
                    key={plot.id}
                    plot={plot}
                    isFavorite={favorites.includes(plot.id)}
                    toggleFavorite={toggleFavorite}
                    highlight={highlight}
                />
            ))}
        </ul>
    )
}

export default PlotsList