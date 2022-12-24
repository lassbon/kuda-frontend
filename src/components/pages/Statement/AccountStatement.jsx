import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import {FaRegCircle} from 'react-icons/fa'
import { FiChevronLeft} from 'react-icons/fi'
// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';


import flag from "../../../img/nig_flag.png"

const AccountStatement = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());
    console.log(startDate)
    // const Example = () => {
        
    //     return (
        
    //     );
    //   };
  return (
    <div className='flex justify-center'>
        <div className="container  w-full max-w-[800px]  p-6">
            <div className="head">
                <div className="flex gap-2 mb-12 justify-center text-3xl font-bold">
                    <span>Statement & Reports</span>
                    <span><img className='w-[30px] h-[30px]' src={flag} alt="Nigeria's Flag" /></span>
                </div>
            </div>
            <div className="menu flex justify-around items-center mb-6 p-4 shadow-xl rounded-lg mb-8">
                <div className="flex-1 focus:border-3 focus:border-b-[#40196d] text-center">Statements</div>
                <div className="flex-1 hover:border-3 hover:border-b-[#40196d] text-center">Reports</div>
            </div>
            <div className="w-[80%] bg-white drop-shadow-2xl mx-auto px-10 py-6">
            <div className="back flex items-center ml-2 mb-2">
                <button><FiChevronLeft /></button>
                <span>Back</span>
            </div>
                <div className="form-head text-center mb-6">
                    <h2 className="font-bold text-2xl" >Get Statement</h2>
                    <p>Choose a timeframe for your statement.</p>
                </div>
            <form className="" >
                    {/* onSubmit={GetStatement} */}
                <div className="date mb-4">
                    <h3 className="mb-4">Select Start Date</h3>
                    <div className=' rounded-lg shadow-4xl p-4'>
                    {/* <input type="date" placeholder='Select date' onChange={(e) => setStartDate(e.target.value)}/> */}
                        <DatePicker className='w-full border-none  outline-none text-slate-400' selected={startDate} onChange={(date) => setStartDate(date)} />
                    </div>
                </div>
                <div className="date mb-4">
                     <h3 className="mb-4">Select End Date</h3>
                    <div className=' rounded-lg shadow-4xl p-4'>
                    {/* <input type="date" placeholder='Select date' onChange={(e) => setStartDate(e.target.value)}/> */}
                         <DatePicker className='w-full border-none  outline-none' selected={endDate} onChange={(date) => setEndDate(date)} />
                    </div> 
                </div>
                <div className="fileType mb-8">
                    <h3 className='mb-4'>File Type</h3>
                    <div className="button flex justify-between gap-32">
                    <button className='flex items-center flex-1 gap-4 rounded-lg py-2 pl-8 hover:bg-green-100 shadow-4xl'> 
                        <FaRegCircle  className="text-2xl"/><a href="/" className="">PDF</a></button>
                        <button className='flex items-center flex-1 gap-4 rounded-lg py-2 pl-8 hover:bg-green-100 shadow-4xl'> 
                        <FaRegCircle  className="text-2xl"/><a href="/" className="">Excel</a></button>
                    </div>
                </div>
                <div className="footer text-center">
                    <button className="px-12 py-2 bg-[#40196d] text-white rounded-lg shadow-xl">Get</button>
                </div>
            </form>
            </div>
            
            
        </div>
    </div>
  )
}

export default AccountStatement