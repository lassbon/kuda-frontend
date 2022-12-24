//  import { useState }  from 'react'
import {FiChevronLeft} from 'react-icons/fi'
import Accordion from "./component/Accordion";


const Faqs = () => {
 
    return (
      <div className='flex justify-center '>
        <div className="flex flex-col gap-8  w-[100%] max-w-[800px] bg-white drop-shadow-2xl px-8 py-12 leading-8">
            <h1 className='mb-10 text-center'>FAQS</h1>
            <div>
                <div className="flex justify-start items-center mb-4 gap-2 p-4">
                  <span><FiChevronLeft /></span>
                  <span> Back</span>
                </div>

                <Accordion />
                
            </div>
        </div>
      </div>
    );
  };

  
export default Faqs
  