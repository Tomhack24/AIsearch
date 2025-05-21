import { Plot } from '@/types'
import React from 'react'
import PlotDetail from './PlotDetail';

interface PlotsListProps{
    plots : Plot[];
}

const PlotsList = ( { plots } : PlotsListProps) => {


    
    return (
        <ul className='flex flex-around justify-center flex-wrap m-5 max-w-content'>
            {plots.map((plot) => (
                <PlotDetail key={plot.id} plot = {plot}/>
            ))}
        </ul>
    )

}

export default PlotsList