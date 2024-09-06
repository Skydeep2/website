import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProducts } from '../context/ProductContext'
import PageNavigation from '../component/PageNavigation'
import Myimage from '../component/Myimage'
import Format from '../helper/Format'
import {TbTruckDelivery,TbReplace } from 'react-icons/tb'
import {BiPackage} from 'react-icons/bi'
import { SiAdguard } from "react-icons/si";
import Star from '../component/Star'
import AddToCart from '../component/AddToCart'

const API = "https://api.pujakaitem.com/api/products"

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProducts();
    console.log("data",singleProduct)

  const { id } = useParams(); 
  
  const {
    id:alias,name,image,company,price,description,colors,category,stock,stars,reviews}=singleProduct;
  
    useEffect(() => {
    getSingleProduct(`${API}?id=${id}`)
  }, [])
  if(isSingleLoading){
    return(<div>Loading....</div>)
  }
  return (
    <div>
      <PageNavigation title={name}/>
      <div className='grid grid-cols-2  my-36 mx-20 text-slate-800 '>
        <div>
          <Myimage img={image} />  
        </div>
        <div className='px-20 '>
          <h2 className='arimo text-3xl pb-3'>{name}</h2>
          <Star star={stars} review={reviews}/>
          <div className='font-bold pb-3'>MRP:<del className='text-red-500'><Format price={price+250000} /></del></div>
          <p className='text-lg text-blue-700 font-semibold pb-3'>
            Deal of the Day: <Format price={price}/>
          </p>
          <p className='work pb-5  text-slate-500 border-b-2'>{description}</p>
          <div className='flex pb-1 pt-5 justify-center border-b-2 '>
            <div className='pr-5'>
            <TbTruckDelivery className='w-9 h-9 mx-auto bg-slate-400 rounded-lg' />
            <p className='work text-xs'>FREE DELIVERY</p>
            </div>
            <div className='pr-5'>
              <TbReplace className='w-9 h-9 mx-auto bg-slate-400 rounded-lg'/>
              <p className='work text-xs'>30  DAYS REPLACEMENT</p>
            </div>
            <div className='pr-5'>
              <BiPackage className='w-9 h-9 mx-auto bg-slate-400 rounded-lg'/>
              <p className='work text-xs'>SAFE DELIVERY</p>
            </div>
            <div className='pr-5'>
              <SiAdguard className='w-9 h-9 mx-auto bg-slate-400 rounded-lg'/>
              <p className='work text-xs'>1 YEAR WARRANTY</p>
            </div>
          </div>
          <div className='mt-5 work'>
            <p>Available : <span className='font-medium'>{stock>0?"In Stock":"Not Available" }</span>
            </p>
            <p>
              Brand : <span className='font-medium'>{company}</span>
            </p>
          </div>
          <hr className='border-black border-2 mt-5' />
          {stock >0 && <AddToCart product={singleProduct}/>} 
        </div>
      </div> 
    </div> 
  )
}

export default SingleProduct
