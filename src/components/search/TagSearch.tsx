import { Plot } from '@/types';
import React, { useState } from 'react'

interface SearchProps {
  plots: Plot[];
  setSearchQuery: (query: string) => void;
  setInputValue: (value: string) => void;
  setIsEnterPressed: (val: boolean) => void;
}

const TagSearch = ({ plots, setSearchQuery, setInputValue, setIsEnterPressed }: SearchProps) => {

    const [isOpen,setIsOpen] = useState(false);

    const allKeywords = plots.flatMap(plot => plot.keyword);
    const uniqueKeywords = Array.from(new Set(allKeywords))
    const shuffled = [...uniqueKeywords].sort(() => 0.5 - Math.random());
    const selected = shuffled.slice(0,3);

    const handleOpen = () => {
        setIsOpen(!isOpen);
    }

    return (
        <div>
            {isOpen ? (
                <div>
                    <div className='w-[800px]'>
                        {uniqueKeywords.map((keyword, idx) => (
                            <button
                            key={idx}
                            className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 m-1  rounded-full"
                            onClick={() => {
                                setSearchQuery(keyword.trim());
                                setInputValue(keyword.trim());
                                setIsEnterPressed(true);
                                }
                            }
                            >
                                {keyword.trim()}
                            </button>
                        ))}
                    </div>
                    <button className='text-center text-sm hover:border-b-1  hover:font-medium' onClick={handleOpen}>閉じる</button>
                </div>
            ):(
            <div>
                <div className='flex'>
                    <p className='text-sm mr-2'>ヒント :</p>
                    {selected.map((keyword, idx) => (
                        <button
                        key={idx}
                        className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 mb-2 rounded-full"
                        onClick={() => {
                            setSearchQuery(keyword.trim());
                            setInputValue(keyword.trim());
                            setIsEnterPressed(true);
                            }
                        }
                        >
                            {keyword.trim()}
                        </button>
                    ))}
                </div>
                    <button className='text-center text-sm hover:border-b-1  hover:font-medium' onClick={handleOpen}>すべてのタグを表示</button>
                </div>

            )}

        </div>
    )
}

export default TagSearch
