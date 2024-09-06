import React from 'react'
import { FaPlus, FaMinus } from "react-icons/fa";

const CartAmount = ({ amount, setDecrease, setIncrease }) => {
    return (
        <div>
            <div className='flex gap-6 mx-1 my-5'>
                <button onClick={()=>setDecrease()}>
                    <FaMinus />
                </button>
                <div>{amount}</div>
                <button onClick={()=>setIncrease()}>
                    <FaPlus />
                </button>
            </div>
        </div>
    )
}

export default CartAmount
