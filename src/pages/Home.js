import React from 'react'
import Hero from '../component/Hero'
import Services from '../component/Services'
import Footer from '../component/Footer'
import FeatureProducts from '../component/FeatureProducts'

const Home = () => {
  const data={
    name:"GZOD STORE"
  }
  return (
    <div>
      <Hero   myData={data}/>
      <FeatureProducts />
      <Services />
      
    </div>
  )
}

export default Home
