import React from 'react'

const SideBlog = () => {
  return (
    <div>
      <div className="box-border p-4 border-2 rounded-md mt-4 mx-24 w-3/5 h-screen">
      <div className=" flex space-x-5">
        <p className="text-slate-400 font-extrabold text-5xl flex items-start mr-4">
            01
          </p>

          <div className='flex flex-col'>
            <h1 className="text-sm font-bold text-black flex items-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, rem.
            </h1>
            <span className="pt-4 flex text-slate-400">
              <span>April 4 . </span>
              <span> 38 min read .</span>
            </span>
          </div>

      </div>
    </div>
    </div>
  )
}

export default SideBlog