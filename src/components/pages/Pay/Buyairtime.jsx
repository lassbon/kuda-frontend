import React from "react"
import PayContainer from "../PayFolder/Container"
import PayCom from "../PayFolder/Paycom"
import LessthanImage from "../../img/Svg/Lessthan.svg"
import Flag from "../../img/Svg/Flag.jpg"
import ArrowDown from "../../img/Svg/Arrowdown.svg"

function BuyAirtime() {
  return (
    <main>
      <PayCom />
      <PayContainer />

      <body>
        <a href='#' className='flex items-center text-[#8971a5] ml-[30rem]'>
          <img src={LessthanImage} alt='' className='w-[0.3rem] mr-2' />
          <span>Back</span>
        </a>
        <div className='flex justify-center mb-5'>
          <p className='text-[1.5rem] font-bold mr-2'>Airtime</p>
          <img src={Flag} alt='' className='w-[1.5rem] pb-3' />
        </div>
        <div>
          <form
            action=''
            className='flex flex-col items-center text-[#666666] text-[1rem]'
          >
            <div>
              <label htmlFor='Amount' className='block mb-2'>
                Amount
              </label>
              <div className='rounded-lg'>
                <span className='bg-[#eff1ff] text-[1rem] p-3'>₦</span>
                <input
                  type='text'
                  id='Amount'
                  placeholder='How much?'
                  className='w-[20rem] p-[0.7rem] bg-white drop-shadow-xl mb-3'
                  style={{ border: "none", outline: "none" }}
                />
              </div>
            </div>
            <div className='my-4'>
              <label htmlFor='Phone Number' className='block mb-2'>
                Phone Number
              </label>
              <input
                type='text'
                id='Phone Number'
                placeholder='What phone number?'
                className='w-[22rem] p-[0.6rem] bg-white drop-shadow-xl'
                style={{ border: "none", outline: "none" }}
              />
            </div>
            <div>
              <label htmlFor='Choose a Network' className='block mb-2'>
                Choose a Network
              </label>
              <span>
                <img
                  src={ArrowDown}
                  alt=''
                  className='w-[0.9rem] inline mr-2'
                />
                <select
                  name=''
                  id='Choose a Network'
                  className='w-[20.7rem] p-[0.5rem] bg-white drop-shadow-xl'
                  style={{ border: "none", outline: "none" }}
                >
                  <option value='Select'>Select</option>
                  <option value='MTN-NG'>MTN-NG</option>
                  <option value='AIRTEL-NG'>AIRTEL-NG</option>
                  <option value='Glo-NG'>Glo-NG</option>
                  <option value='9MOBILE-NG'>9MOBILE</option>
                </select>
              </span>
            </div>
            <button className=' bg-[#a08cb6] text-[1.2rem] text-white font-bold my-7 w-[11rem] p-2 rounded-xl'>
              Pay
            </button>
          </form>
        </div>
      </body>
    </main>
  )
}

export default BuyAirtime
