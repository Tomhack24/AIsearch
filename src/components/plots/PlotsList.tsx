import { Plot } from '@/types'
import React from 'react'
import PlotDetail from './PlotDetail';

interface PlotsListProps{
    plots : Plot[];
}

const PlotsList = ( { plots } : PlotsListProps) => {

    
    
    return (
        <div>
            <div className='my-3 '>
                {plots.length != 0 && (
                    <div className="flex items-center my-4">
                    <div className="flex-grow border-t border-gray-500"></div>
                    <span className="mx-4 text-gray-500 whitespace-nowrap">
                        {plots.length}個のAIが見つかりました
                    </span>
                    <div className="flex-grow border-t border-gray-500"></div>
                    </div>
                    )
                }
            </div>
            <ul className='flex flex-wrap justify-center items-start  m-5 mb-20 py-5 max-w-[1200px]  shadow-md rounded-4xl'>
                {plots.map((plot) => (
                    <PlotDetail key={plot.id} plot = {plot}/>
                ))}
            </ul>

        </div>
    )

}

export default PlotsList