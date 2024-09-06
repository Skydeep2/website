import React from 'react'
import { NavLink } from 'react-router-dom'

const PageNavigation = ({title}) => {
  return (
    <div className='work bg-neutral-300 text-lg px-7 text-slate-800' >
      <NavLink to="/" >HOME</NavLink> / {title}
    </div>
  )
}

export default PageNavigation
