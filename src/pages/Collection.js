import React from 'react'
import FilterSection from '../component/FilterSection'
import Sort from '../component/Sort'
import ProductList from '../component/ProductList'
import { useFilter } from '../context/FilterContext'

const Collection = () => {

  const{filter_products}=useFilter()
  console.log(filter_products)

  return (
    <div className='contaier flex border-black  mx-52'>
      <div className='border-2 border-black bg-lime-600 w-1/5'>
      <FilterSection /> 
      </div>
      <section className='border-2 border-black grid-rows-2 w-4/5'> 
      <div className='bg-red-600 '>
        <Sort />
      </div>
      <div  className='bg-orange-500 '><ProductList />
        </div></section>
    </div>
  )
}

export default Collection
