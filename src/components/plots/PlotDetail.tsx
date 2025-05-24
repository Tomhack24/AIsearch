import { Plot } from '@/types'
import React, { useState } from 'react'


interface PlotDetailProps {
  plot: Plot;
  isFavorite: boolean;
  toggleFavorite: (id: string) => void;
}

const PlotDetail = ({ plot, isFavorite, toggleFavorite }: PlotDetailProps) => {

  const handleOpen = () => {
    setIsOpen(!isOpen);
  }

  const [isOpen,setIsOpen] = useState(false);

  return (

    <li className='relative flex w-[320px] mx-5 my-2 p-5 border-1 border-gray-200 bg-white shadow-xl rounded-4xl'>
      {/* お気に入りボタン */}
      <button
        className="absolute right-4 top-4 text-2xl"
        onClick={() => toggleFavorite(plot.id)}
        aria-label="お気に入り"
      >
        {isFavorite ? "★" : "☆"}
      </button>

      <div className='text-sm mx-auto'>
        <img 
          src={plot.img_url} 
          alt={plot.title} 
          className="mx-auto mb-2 w-[200px] h-[120px] object-contain"
        />
        <div className="text-center text-lg font-semibold text-neutral-700 mb-3">{plot.title}</div>
        <div className="text-start  mb-5">{plot.headline}</div>
        <button
          className='w-full flex items-center justify-end gap-2 py-2 px-4
                     font-bold text-gray-700 border-t-1 border-b-gray-500
                     hover:bg-gray-100 transition-colors duration-200'
          onClick={handleOpen}
        >
          <span className="text-lg">More</span> {/* ボタンの左側に「More」というテキスト */}
          <span className="text-2xl leading-none"> {/* アイコン部分のスタイル調整 */}
            {isOpen ? "−" : "＋" } {/* isOpenの状態に応じて表示を切り替え */}
          </span>
        </button>
        {/* プルダウンメニューのコンテナ */}
          <div 
            className={`transition-all duration-300 overflow-hidden pt-4 ${ // pt-4 を追加して、上部にスペース
              isOpen ? 'max-h-[600px]' : 'max-h-0'}`} // max-h を適宜調整
          >
            {/* 各項目を個別のセクションとして視覚的に整理 */}
            {/* よい点 */}
            <div className="mb-4">
              <p className="font-semibold text-gray-800 text-lg mb-1">Good 👍:</p> {/* 見出し */}
              <div className='whitespace-pre-line text-gray-700'>{plot.good_point}</div>
            </div>

            {/* 悪い点 */}
            <div className="mb-4">
              <p className="font-semibold text-gray-800 text-lg mb-1">Bad 👎:</p>
              <div className='whitespace-pre-line text-gray-700'>{plot.bad_point}</div>
            </div>

            {/* 料金 */}
            <div className="mb-4">
              <p className="font-semibold text-gray-800 text-lg mb-1">料金:</p> 
              <div className='whitespace-pre-line text-gray-700'>{plot.plan}</div>
            </div>

            {/* 関連リンク */}
            <div className="mb-4">
              <p className="font-semibold text-gray-800 text-lg mb-1">関連リンク:</p>
              <a
                href={plot.url}
                target="_blank" // 新しいタブで開く
                rel="noopener noreferrer" // セキュリティ対策
                className='text-blue-600 hover:text-blue-400 duration-200 break-all' // break-all で長いURLも途中で改行
              >
                {plot.url}
              </a>
            </div>

            {/* キーワード */}
            <div className="mb-2"> {/* キーワードが一番下なので、下のmbは少なめ */}
              <p className="font-semibold text-gray-800 text-lg mb-1">キーワード:</p>
              <div className="flex flex-wrap gap-2"> {/* キーワードをタグのように表示 */}
                {plot.keyword && plot.keyword.map((keyword, idx) => ( // カンマ区切りで分割
                  <span key={idx} className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full">
                    {keyword.trim()} {/* 前後の空白を削除 */}
                  </span>
                ))}
              </div>
          </div>
          </div>
      </div>
    </li>

  )
}

export default PlotDetail