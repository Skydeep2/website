import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero = ({myData}) => {
  const {name}= myData
  return (<>
<div class="grid grid-rows-3 grid-flow-col gap-1  my-24 mx-56">
  <div class="row-span-3 ...  max-w-7xl bg-gradient-to-r from-cyan-500 to-blue-500 rounded-sm">
    <img src='images/Hero.jpg' className='pt-16 pl-10 hover:max-w-md'></img>
  </div>
  <div class="col-span-2 ...">
    <h1 className='arimo'>WELCOME TO </h1>
    <h1 className='NameDetail text-8xl'>{name}</h1>
  </div>
  <div class="row-span-2 col-span-2 ...    ">
    <p className='arimo text-sm bg-gradient-to-r from-cyan-500 to-blue-500 h-64 rounded-sm'> GZOD store is a cutting-edge online retail platform committed to delivering a seamless and enjoyable shopping experience. Founded in 2024, our company aims to redefine the way people shop by offering a diverse range of high-quality products, exceptional customer service, and an intuitive, user-friendly online store.
<br />
Our mission is to connect customers with the products they love, providing a convenient and secure shopping experience that fits into their busy lives. We pride ourselves on our carefully curated product selection, which includes everything from fashion and electronics to home goods and groceries. Our focus is on quality, affordability, and the latest trends, ensuring that every customer finds exactly what they’re looking for.</p>
<NavLink to='/collection'> <button className='NameDetail bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 w-20 h-7 mt-1 rounded-sm'>SHOPE NOW</button></NavLink>
  </div>
</div>

</>)
}

export default Hero
