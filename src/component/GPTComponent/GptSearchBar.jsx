import React from 'react'
import lang from '../../utils/languageConstant'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
  const langKey=useSelector((store)=>store?.config?.lang)
  return (
    <div className='pt-[8%] flex justify-center'>
    <form onSubmit={(e)=>e.preventDefault()} className='w-1/2 bg-black grid grid-cols-12'>
      <input
        type="text"
        className='p-4 m-4 border bg-white col-span-9'
        placeholder={lang[langKey]?.gptSearchPlaceHolder}
      />
      <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'>
        {lang[langKey]?.search}
      </button>
    </form>
  </div>
  
  )
}

export default GptSearchBar