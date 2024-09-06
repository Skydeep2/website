import React from 'react'
import { NavLink } from 'react-router-dom'

const Error = () => {
    return (<>
        <div className='mt-12 mx-96 '>
            <div className='flex items-center'>
                <div >
                    <h1 className='NameDetail text-5xl'>404</h1>
                    <h1 className='arimo text-4xl'>UH OH! You're lost.</h1>
                </div>
                <img src='images/pagenot.png' className='w-80 '></img>
            </div>
            <p>Oops! The page you’re looking for doesn’t exist. It might have been moved or deleted.</p>
            <button className='bg-gradient-to-r from-teal-400 to-blue-500 rounded-sm w-36 '>
                <NavLink to='/'>Go Back To Home</NavLink>
                </button>
        </div>

    </>
    )
}

export default Error
