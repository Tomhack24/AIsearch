import { Plot } from '@/types'
import React from 'react'

interface PlotDetailProps{
    plot : Plot;
}

const PlotDetail =  ( { plot } : PlotDetailProps) => {
  return (
    <li key={plot.id} className='flex flex-col justify-center w-[480px] mt-10 mx-10'>
      <div className='mx-auto'>
        <img 
          src={plot.img_url} 
          alt={plot.title} 
          className="mx-auto w-[256px] h-[160px] object-contain"
        />
        <div className="text-center mb-2">{plot.title}</div>
        <div className='whitespace-pre-line w-fit mb-2'>{plot.good_point}</div>
        <div className='whitespace-pre-line mb-2'>{plot.bad_point}</div>
        <a href= {plot.url} className='text-blue-600 hover:text-blue-400 duration:200'>{plot.url}</a>
        <div>{plot.keyword}</div>
      </div>
    </li>

  )
}

export default PlotDetail