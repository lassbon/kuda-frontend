import React from 'react'
import {FaChevronRight} from 'react-icons/fa'
const Card = ({text, icon}) => {
  return (
    <div className="shadow-4xl flex justify-between items-center bg-white px-3 py-4 rounded-md">
    <div className="inner flex justify-between items-center gap-3">
         <img src={icon} alt="" className='w-[1.625rem] h-[1.8125rem] p-1 shadow-4xl' />
         <p className='font-bold text-[#40196d]'>{text}</p>
    </div>
    <span><FaChevronRight className='text-gray-300' /></span>
</div>
  )
}

export default Card