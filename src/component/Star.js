import React from 'react';
import { FaStarHalf, FaStar } from "react-icons/fa";
import { AiOutlineStar } from 'react-icons/ai';

const Star = ({ stars, reviews }) => {
  const rating = Array.from({ length: 5 }, (elem, index) => {
    const number = index + 0.5;
    debugger;
    console.log(reviews)
    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className='fill-orange-400' />
        ) : stars >= number ? (
          <FaStarHalf className='fill-orange-400' />
        ) : (
          <AiOutlineStar className='fill-orange-400' />
        )}
      </span>
    );
  });

  return (
    <div className='flex items-center'>
      {rating}
      <p className='ml-2'>({reviews} customer reviews)</p>
    </div>
  );
};

export default Star;
