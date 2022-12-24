import { useState } from 'react'
import {FiChevronRight,FiChevronDown} from 'react-icons/fi'
import {accordionData} from "./Text"
const Accordion = () => {
  const [selected, setSelected] = useState(null)

  const toggle =(i)=>{
    if(selected ===i){
      return setSelected(null)
    }
    setSelected(i)
  }
  
 
  return (
    <div className="wrapper p-4 ">
      <div className="accordion flex flex-col gap-6">
        {accordionData.map((item, i)=>{
         return<div className="item"> 
              <div className="title flex justify-between mb-2 " onClick={()=>toggle(i)}>
                <h2 key={i}  className=' font-body text-lg'>{item.title}</h2>
                <span>{selected=== i? <FiChevronDown/> : <FiChevronRight/> }</span>
              </div>
              <div className={selected===i ?'block transition-all duration-500': 'hidden transition-all duration-500' }>
                    {item.content.map((data, index)=>{
                    return  <p key={index} className='my-6 text-justify'><a href="/">{data}</a></p>
                    })}
                </div>
            </div>
        })} 
        
  </div> 
</div>
  )
}

export default Accordion