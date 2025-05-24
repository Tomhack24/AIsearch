import { Plot } from '@/types'
import React, { useState } from 'react'


interface PlotDetailProps{
    plot : Plot;
}

const PlotDetail =  ( { plot } : PlotDetailProps) => {

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  const [isOpen,setIsOpen] = useState(false);

  return (
    <li key={plot.id} className='flex w-[480px] m-10 p-10 border-1 border-gray-200 bg-white shadow-x1 rounded-4xl'>
      <div className='mx-auto'>
        <img 
          src={plot.img_url} 
          alt={plot.title} 
          className="mx-auto mb-2 w-[256px] h-[160px] object-contain"
        />
        <div className="text-center text-xl font-semibold text-neutral-700 mb-3">{plot.title}</div>
        <div className="text-start  mb-5">{plot.headline}</div>
        <button
          className='w-full flex items-center justify-end gap-2 py-2 px-4
                     font-bold text-gray-700 border-t-1 border-b-gray-500
                     hover:bg-gray-100 transition-colors duration-200'
          onClick={handleOpen}
        >
          <span className="text-lg">More</span> {/* ボタンの左側に「詳細情報」というテキスト */}
          <span className="text-2xl leading-none"> {/* アイコン部分のスタイル調整 */}
            {isOpen ? "−" : "＋" } {/* isOpenの状態に応じて表示を切り替え */}
          </span>
        </button>
          <div 
            className={`transition-all duration-300  overflow-hidden ${
            isOpen ? 'max-h-[600px] mt-4' : 'max-h-0'}`}
          >
            <div className='whitespace-pre-line  mb-2'>{plot.good_point}</div>
            <div className='whitespace-pre-line mb-2'>{plot.bad_point}</div>
            <a href= {plot.url} className='text-blue-600 hover:text-blue-400 duration:200'>{plot.url}</a>
            <div>{plot.keyword}</div>
          </div>
      </div>
    </li>

  )
}

export default PlotDetail