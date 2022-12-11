import React from "react"
import { useState } from "react"
import nigFlag from "../../../img/nig_flag.png"
import Navbar from "../Navbar/Navbar"
import Backarrow from "../../../img/Svg/Backarrow.svg"
import facebookicon from "../../../img/Svg/facebookicon.svg"
import persons2 from "../../../img/Svg/persons2.svg"
import purpleicon from "../../../img/Svg/purpleicon.svg"
import twittericon from "../../../img/Svg/twittericon.svg"
import persons from "../../../img/Svg/persons.svg"
import gift from "../../../img/Svg/gGiftbag.svg"
function Referrals() {

  



  return (
    <div className='font-Mulish'>
      <Navbar />
      <body className='flex justify-center items-center '>
        <div className=' flex justify-center flex-col w-[40rem] p-[3rem]'>
          <div className=' flex justify-center items-center mt-[2rem]'>
            <h3 className=' text-[#40196d] font-bold text-lg'>Referrals</h3>
            <img src={nigFlag} alt='Nig flag' className=' w-[2rem] '></img>
          </div>
          <div className=' border  shadow-xl '>
            <div className='flex flex-col px-5  py-5'>
              <div className='flex items-center mx-[1rem] w-[10vh]'>
                  <a href="/account">
                    <img
                      src={Backarrow}
                      alt='backarrow'
                      className='w-[1rem] h-[1rem]'
                    ></img>
                  </a>
                <p className=' flex items-center   text-[#40196d]'>Back</p>
              </div>
              <div className='mx-[2rem] mt-[1rem]'>
                <img
                  src={persons}
                  alt='persons'
                  className=' flex items-end w-[110vh] h-[8rem]'
                ></img>
              </div>
              <div className='mx-[2rem] mt-[2rem]'>
                <div className='flex flex-row  '>
                  <div className='flex flex-col w-1/2'>
                    <h3 className='font-bold text-[#020202]'>
                      Spread the love!
                    </h3>
                    <br></br>
                    <p className='text-sm'>
                      Invite your friends and family to enjoy Kuda with your
                      referral code
                    </p>
                  </div>
                  <div className='flex flex-col w-1/2'>
                    <div className='flex gap-2 bg-[#411a6e] '>
                      <div className='flex flex-col p-3 w-full text-[#ffffff] bg-[#411a6e]'>
                        <div className='flex justify-between w-full'>
                          <h5 className='text-sm'>Referral code</h5>
                          <div className=' flex justify-end h-[1rem] gap-2'>
                            <img
                              src={purpleicon}
                              alt='purple'
                              className='text-[#411a6e] bg-[#411a6e]'
                            ></img>
                            <img
                              src={facebookicon}
                              alt='facebook'
                              className='text-[#ffffff] bg-[#411a6e]'
                            ></img>
                            <img
                              src={twittericon}
                              alt='twitter'
                              className='text-[ffffff] bg-[#411a6e]'
                            ></img>
                          </div>
                        </div>
                        <div className='text-[#ffffff] font-bold py-[0.5rem] '>
                          <h1>RbEs0V3S</h1>
                        </div>
                      </div>
                    </div>
                    <br></br>
                    <div className='flex gap-3 w-full '>
                      <div className=' flex flex-col  text-[10px] text-[#411a6e] w-1/2 p-5'>
                        <p className='text-[#411a6e] font-bold'>
                          Pending reward
                        </p>
                        <p className='text-[#411a6e] font-bold'>N 0.00</p>
                      </div>
                      <div className=' flex flex-col text-[10px] w-1/2 p-5'>
                        <p className='text-[#411a6e] font-bold'>
                          You've earned
                        </p>
                        <p className='text-[#411a6e] font-bold'>N 0.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <button type="submit" className=' flex justify-center mx-[2rem] my-[2rem] bg-[#411a6e] text-[#ffffff] p-[0.5rem] rounded-lg'>
                {" "}
                Share Referral Code
              </button>

              <div className='mx-[2rem] mt-[1rem]'>
                <div className=' flex flex-col px-10'>
                  <div className=' flex flex-col justify-center items-center mt-[2rem] gap-10'>
                    <div className='font-bold'>Invited Friends</div>
                    <div>
                      <img
                        src={persons2}
                        alt='persons2'
                        className='w-[35vh]'
                      ></img>
                    </div>
                  </div>
                  <div className=' flex flex-col gap-2 pt-[1rem] pb-[2rem]'>
                    <div className='flex justify-between text-[10px]'>
                      <p>Total friends referred</p>
                      <p>0 friends</p>
                    </div>
                    <button className='border bg-[#daf6e8] w-[] rounded-2xl h-[0.6rem]'></button>
                  </div>
                  <div className='flex justify-center pb-[3rem]'>
                    <div className='text-[#a5a5a5] text-sm'>
                      0 completed referrals
                    </div>
                  </div>
                </div>
              </div>
              <div className='mx-[2rem] mt-[2rem] pb-[2rem]'>
                <div className='flex items-center justify-center font-bold'>
                  Referral History
                </div>
                <div className=' flex flex-col justify-center items-center mx-[2rem] mt-[2rem] gap-5'>
                  <img
                    src={gift}
                    alt='gift'
                    className=' w-[10vh] h-[10vh]'
                  ></img>
                  <div className='text-sm'>You have no referral history</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  )
}
export default Referrals
