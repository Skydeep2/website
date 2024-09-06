import React, { useState } from 'react'
import { FaCheck } from "react-icons/fa6";
import CartAmount from './CartAmount';
import { NavLink } from 'react-router-dom';

const AddToCart = ({ product }) => {
  const { id, colors, stock } = product
  const[color,setColor]=useState(colors[0])
  const[amount,setAmount]=useState(1)

  const setDecrease=()=>{
    amount>1?setAmount(amount-1):setAmount(1);
  }
  const setIncrease=()=>{
    amount<stock?setAmount(amount+1):setAmount(stock);
  }

  return (<>
    <div className='flex'>
      <p className='flex items-center work'>
        Colors :
        {colors.map((curColor, index) => {
          return(<button key={index} style={{backgroundColor:curColor }} className='m-2 rounded-full w-5 h-5  hover:opacity-100 ' 
          onClick={()=>setColor(curColor)}
          >{color===curColor?<FaCheck className='flex mx-auto text-white'/> :null}</button>)
        })}
      </p>
    </div>
    <CartAmount  amount={amount} setDecrease={setDecrease} setIncrease={setIncrease}/>
    <NavLink to='/cart'><button className='work bg-orange-400 rounded-lg w-32 shadow-xl hover:shadow-md'>Add To Cart</button></NavLink>
    </>
  )
}

export default AddToCart
