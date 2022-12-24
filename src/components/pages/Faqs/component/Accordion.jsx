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
      <div className="accordion flex flex-col gap-6 transition-all duration-500">
        {accordionData.map((item, i)=>{
         return<div className="item"> 
              <div className="title flex justify-between mb-2" onClick={()=>toggle(i)}>
                <h2>{item.title}</h2>
                <span>{selected=== i? <FiChevronDown/> : <FiChevronRight/> }</span>
              </div>
              <div className={selected===i ?'block': 'hidden' }>{item.content}</div>
            </div>
        })} 
        
  </div> 
</div>
  )
}

export default Accordion