import { Plot } from '@/types'
import React from 'react'
import PlotDetail from './PlotDetail';

interface PlotsListProps{
    plots : Plot[];
}

const PlotsList = ( { plots } : PlotsListProps) => {


    
    return (
        <ul className='flex flex-wrap justify-center items-start  m-5 mb-20 pb-5 max-w-[1200px]  shadow-md rounded-4xl'>
            {plots.map((plot) => (
                <PlotDetail key={plot.id} plot = {plot}/>
            ))}
        </ul>
    )

}

export default PlotsList