import React from 'react'

const Services = () => {
  return (
    <div>
      <div class="grid grid-cols-3 gap-4 ml-20 mr-20">
  <div class="bg-slate-200 items-center text-center ml-5 mt-20 rounded-3xl">
  <img src='images/truck.jpeg' className='w-24 mx-auto'></img>
  <p className='NameDetail text-xl'>Super Fast and Free Delivery </p>
  </div>
  <div class="  bg-slate-200 items-center text-center mt-20 rounded-3xl">
  <img src='images/money.png' className='w-24 mx-auto mt-2 '></img><p className='NameDetail text-xl'>Money Back Graunted</p>
  </div>
  <div class="  bg-slate-200 items-center text-center mt-20 rounded-3xl ">
  <img src='images/shield.png' className='w-16 mx-auto'></img><p className='NameDetail text-xl '>Non-contact Shipping</p>
  </div>
  <div class="col-span-3  bg-slate-200 items-center text-center  rounded-3xl mx-20">
  <img src='images/secure.png' className='w-24 mx-auto'></img>
  <p className='NameDetail text-xl '> super secure payment</p>
  </div>
</div>
    </div>
    
  )
}

export default Services
