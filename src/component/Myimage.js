import React, { useState } from 'react'

const Myimage = ({img = [{url:""}]}) => {
  const [main,setMain]=useState(img[0]);
  return (
    <div className='grid grid-cols-2 gap-2 flex items-center'>
      <div className='pl-52 py-20 '>
      {img.map((curElm,i)=>(
            <figure key={i}>
              <img src={curElm.url} alt={curElm.filename} className='w-32 py-1 rounded-lg hover:shadow-2xl hover:shadow-black hover:cursor-pointer' onClick={()=>setMain(curElm)}></img>
            </figure>  
      ))
      }</div>
      <div>
        <img src={main.url} alt={main.filename} className='rounded-lg' />
      </div>
    </div>
  )
}

export default Myimage

