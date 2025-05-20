import { Plot } from '@/types'
import React from 'react'
import PlotDetail from './PlotDetail';

interface PlotsListProps{
    plots : Plot[];
}

const PlotsList = ( { plots } : PlotsListProps) => {


    
    return (
        <ul>
            {plots.map((plot) => (
                <PlotDetail key={plot.id} plot = {plot}/>
            ))}
        </ul>
    )

}

export default PlotsList