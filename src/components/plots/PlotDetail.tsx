import { Plot } from '@/types'
import React from 'react'

interface PlotDetailProps{
    plot : Plot;
}

const PlotDetail =  ( { plot } : PlotDetailProps) => {
  return (
    <li key={plot.id} className='mt-10'>
        <div>{plot.title}</div>
        <div>{plot.good_point}</div>
        <div>{plot.bad_point}</div>
        <a href= {plot.url}/>
        <div>{plot.keyword}</div>
        <img 
            src={plot.img_url} 
            alt={plot.title} 
            width="256" 
            height="160"
        />
    </li>

  )
}

export default PlotDetail