import React from 'react'

export default function LiveStreamBox({data, btnText}) {
  return (
    <div className={`w-full py-16 px-4 h-[400px] flex items-center ${data.color} ${data.bgColor}`}>
      <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2">
        <img src={data.image} alt="laptop" className="w-[350px] mx-auto my-4" />
      
      <div className="flex flex-col justify-center">
        <p className="text-[#00df9a] font-bold">{data.heading}</p>
        <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">{data.title}</h1>
        <p>
          {data.description}
        </p> 
        <p className='mt-3 font-bold'>
            {data.DateAndTime}
        </p>
        <button className={`text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 ${data.btnColor}`}>{btnText}</button>
      </div>
      </div>
    </div>
  )
}
