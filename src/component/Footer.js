import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div >
      <section>
        <div className='grid grid-cols-2 h-20  bg-neutral-300 rounded-t-lg mx-72 mt-24 '>
            <div className='arimo text-slate-800 text-sm font-medium mx-20 py-5'>
                <p className='font-medium'>Ready to Go?</p>
                <p className='font-medium'>Talk to us today</p>
            </div>
            <div className='pl-52 py-5'>
                <button className='w-32 h-10 rounded-sm bg-gradient-to-r from-teal-400 to-blue-500 hover:from-pink-500 hover:to-orange-500 '>
                    <NavLink to='/contact' className="NameDetail text-2xl">GET STARTED</NavLink>
                </button>
            </div>
        </div>
      </section>
      <div className=''>
        <div className='grid grid-cols-3 gap-4 bg-gradient-to-r from-teal-600 to-blue-500 h-72 px-56 text-white '>
            <div >
                <p className='arimo my-5 text-center text-lg font-bold'>GZOD STORE</p>
                <p className='arimo text-sm'>GZOD store is a cutting-edge online retail platform committed to delivering a seamless and enjoyable shopping experience. Founded in 2024, our company aims to redefine the way people shop by offering a diverse range of high-quality products, exceptional customer service, and an intuitive, user-friendly online store.</p>
            </div>
            <div>
                <p className='arimo my-5 text-lg font-medium text-center'>Follow us</p>
                <a href='https://www.instagram.com/s.k.y.d.e.e.p/'><img src='images/insta.png' className='w-10 mx-auto'></img></a>
                <a href='https://www.linkedin.com/in/gdeep2002/'><img src='images/link.png' className='w-10 py-5 mx-auto'></img></a>
            </div>
            <div>
                <p className='arimo my-5 text-center text-lg font-medium'>Contact us</p>
                <p className='arimo text-sm text-center'>+91 9815733159</p>
            </div>
        </div>
      </div>
      <div className='flex bg-gradient-to-r from-teal-600 to-blue-500 border-t-2 text-white py-5'>
        <p className='arimo px-72 text-sm'>@2024  GZODTechnical.All Rights Reserved</p> <p className='arimo pl-36 text-sm '>PRIVACY POLICY<br></br>
            TERMS & CONDITION
        </p>
      </div>
    </div>
  )
}

export default Footer
