import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='w-screen aspect-video absolute pt-[20%] px-24 text-white bg-gradient-to-r from-black '>
      <h1 className=' text-3xl font-bold '>{title}</h1>
      <p className='text-lg py-4 w-1/4 text-justify'>{overview}</p>
      <div className=''>
        <button className='bg-white text-black hover:font-bold  transition-all duration-200 ease-in-out hover:scale-105 active-scale-95 px-10 mr-4 rounded-lg hover:opacity-85  text-lg p-2'> ▷ Play</button>
        <button className='bg-gray-400 px-10  rounded-lg hover:font-bold text-white text-lg mx-2 p-2 hover:scale-105 active:scale-95'> More Info</button>
      </div>
    </div>
  )
}

export default VideoTitle