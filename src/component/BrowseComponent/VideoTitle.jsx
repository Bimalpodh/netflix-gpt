import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-[15%] text-wrap md:pt-[20%] px-6 md:px-24 text-white bg-gradient-to-r from-black '>
      <h1 className='w-30 md:w-auto ml-4 md:ml-0 text-sm md:text-3xl font-bold '>{title}</h1>
      <p className='hidden sm:hidden md:inline-block text-lg py-4 w-1/4 text-justify'>{overview}</p>

      <div className='flex m-4 md:m-0 md:mt-4 '>
        <button className='bg-white text-black hover:font-bold  md:transition-all md:duration-200 md:ease-in-out md:hover:scale-105 md:active-scale-95 md:px-10 md:mr-2 rounded-lg hover:opacity-85   md:text-lg md:p-2 md:h-10 md:w-30 w-20 h-7'> ▷Play</button>

        <button className='bg-gray-400 md:px-10 hover:font-bold text-white md:transition-all md:duration-200 md:ease-in-out md:hover:scale-105 md:active-scale-95 ml-2 md:mr-4 rounded-lg hover:opacity-85  md:text-lg md:p-2 md:h-10 md:w-30 w-20 h-7'>Info</button>
      </div>
    </div>
  )
}

export default VideoTitle;