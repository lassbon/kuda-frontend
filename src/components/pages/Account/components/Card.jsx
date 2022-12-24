import { useContext } from "react"
import {useState} from "react"
import { FaChevronRight } from "react-icons/fa"
import { IoToggleSharp } from "react-icons/io5"
import {MdToggleOff} from 'react-icons/md'
import {useBlurContext} from '../../../context/ContextBlur'
const Card = ({ text, icon, onClick,active, inactive, isIconChevron = true}) => {
  // const [isToggled, setIsToggled] = useState(true)
  // function toggler (){
  //    return setIsToggled(!isToggled)
  // }
  // const {isToggled, toggler} = useBlurContext()
  // console.log(toggler)
  return (
    <>
      {isIconChevron? <div className='shadow-4xl flex justify-between items-center bg-white px-3 py-4 rounded-md'>
      <div className='inner flex justify-between items-center gap-3'>
        <img
          src={icon}
          alt=''
          className='w-[1.625rem] h-[1.8125rem] p-1 shadow-4xl'
        />
        <p className='font-bold text-[#40196d]'>{text}</p>

      </div>
      <button onClick={onClick}><FaChevronRight className='text-gray-300' /></button>  
    </div>
    :   <div className='shadow-4xl flex justify-between items-center bg-white px-3 py-4 rounded-md'>
    <div className='inner flex justify-between items-center gap-3'>
      <img
        src={icon}
        alt=''
        className='w-[1.625rem] h-[1.8125rem] p-1 shadow-4xl'
      />
      <p className='font-bold text-[#40196d]'>{text}</p>

    </div>
    {active ? <button onClick={inactive}> <IoToggleSharp className='text-3xl text-gray-300' /></button>
    : <button onClick={inactive} > <MdToggleOff className='text-3xl text-green-300' /></button>} 
  </div>
   
  }
    </>
    
  )
}



export default Card