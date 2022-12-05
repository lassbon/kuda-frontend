import React from 'react'
import {FaChevronRight} from 'react-icons/fa'
import {IoToggleSharp} from 'react-icons/io5'
const Card = ({text, icon, isIconChevron=true}) => {
  return (
    <div className="shadow-4xl flex justify-between items-center bg-white px-3 py-4 rounded-md">
    <div className="inner flex justify-between items-center gap-3">
         <img src={icon} alt="" className='w-[1.625rem] h-[1.8125rem] p-1 shadow-4xl' />
         <p className='font-bold text-[#40196d]'>{text}</p>
    </div>
    <span>{isIconChevron ? <FaChevronRight className='text-gray-300' /> : <IoToggleSharp className='text-3xl text-gray-300'/>}</span>
</div>
  )
}

export default Card