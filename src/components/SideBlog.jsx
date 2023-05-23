import React from 'react'

const SideBlog = () => {
  return (
    <div>
        <div className="box-border p-4 border-2 rounded-md mt-4 mx-24 w-1/5 h-screen">
      <div className="flex space-x-4">
        <div className="">
          <h1 className="text-3xl font-bold text-black">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, rem.
          </h1>
          <p className="text-slate-400 pt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores
            quibusdam aspernatur dicta quo commodi id sint autem dignissimos
            delectus maiores!
          </p>
        </div>

      </div>
      <span className="pt-4 flex text-slate-400">
        <span>April 4 . </span>
        <span> 38 min read .</span>
      </span>
    </div>
    </div>
  )
}

export default SideBlog