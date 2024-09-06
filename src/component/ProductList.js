import React from 'react'
import {useFilter} from '../context/FilterContext'
import GridView from './GridView'

const ProductList = () => {
  const {filter_products ,grid_view}=useFilter()
  
  if(grid_view===true){
    return<GridView products={filter_products}/>
  }

}

export default ProductList
