import React from 'react'
import Collection from './Collection'
import Hero from '../component/Hero'
import { useProducts } from '../context/ProductContext'
const About = () => {
  const data={
    name:"GZOD ECOMMERCE"
  }
  return (
   <div>
    <Hero  myData={data}/>
   </div>
  )
}

export default About

