import React from 'react'



function Background () {
  return (
    <>
    <div className='fixed z-[2] w-full h-screen '></div>
    <div className="absolute top-[5%]  w-full py-10 flex justify-center text-zinc-500 text-xl font-semibold">Documents.</div>
      <h1 className="absolute text-[13vw] leading-none tracking-tight font-semibold text-white-900">
        Docs.
      </h1>
      </>
  )
}

export default Background
