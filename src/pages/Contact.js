import React from 'react'
import Footer from '../component/Footer'

const Contact = () => {
  return (
    <div>
      <h1 className='arimo text-5xl  text-center  my-10'>CONTACT US</h1>
      <div className='flex ml-24'>
        <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27369.12654571981!2d76.50282268821303!3d30.96655224090772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3905544e6da016a9%3A0xd776f7800966d620!2sGarden%20Colony%2C%20Shampura%2C%20Rupnagar%2C%20Punjab%20140001!5e0!3m2!1sen!2sin!4v1724961502095!5m2!1sen!2sin" width="700" height="450" style={{ border: 0 }} allowFullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='rounded-lg'></iframe>
        <div className='mx-auto bg-gradient-to-r from-cyan-500 to-blue-500 w-96 rounded-md'>
          <form action='https://formspree.io/f/xwpeyazg' method='POST'>
            <input type='text' placeholder='username' name='Username' required autoComplete='off' className='px-2 w-72 ml-10 mt-10 rounded-sm drop-shadow-lg'/><br />
            <input type='text' placeholder='email' name='Email' required autoComplete='off' className='px-2 ml-10 mt-10 w-72 rounded-sm drop-shadow-lg'/><br />
            <textarea placeholder='enter your message' name='Message' cols="30" rows="10" required autoComplete='off' className='px-2 ml-10 mt-10 w-72 rounded-sm drop-shadow-lg'></textarea><br />
            <input type='submit' value="SEND" className="arimo bg-white w-24 rounded-sm my-5 ml-10 drop-shadow-lg"></input>
          </form>
        </div>
      </div>
      
    </div>
    
  )
}

export default Contact
