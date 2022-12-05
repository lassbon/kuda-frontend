import React from "react";
import logo from "../../img/Svg/Kuda_Logo.svg"
import home from "../../img/Svg/Home.svg"
import pay from "../../img/Svg/Pay.svg"
import invest from "../../img/Svg/Invest.svg"
import budget from "../../img/Svg/Budget.svg"
import card from "../../img/Svg/Card.svg"
import account from "../../img/account.jpg"
import Home_Invest from "../../img/Svg/Home_Invest.svg"
import dollar from "../../img/Svg/Dollar.svg"
import invest_logo from "../../img/Svg/Invest_Logo.svg"
import social_media from "../../img/Svg/Social_Media.svg"
import fund from "../../img/Svg/Fund.svg"






function Invest () {

    return (
<div className="font-Mulish  " >

        <nav className="bg-white flex justify-between items-center px-[3rem] py-[1rem] drop-shadow-md">

        <img src={logo} alt="logo" className="w-[5rem] " />

        <div className="flex gap-x-8">
            <div className="flex items-center">
                <img src={home} alt="home" className="w-[1.5rem] " />
                <p className="text-[#b2a2c4] mx-[1rem]" >Home</p>
            </div>
            <div className="flex items-center">
                <img src={pay} alt="pay" className="w-[1.5rem]" />
                <p className="text-[#b2a2c4] mx-[1rem]">Pay</p>
            </div>
            <div className="flex items-center">
                <img src={invest} alt="invest" className="w-[1.5rem]" />
                <a className="text-[#b2a2c4] mx-[1rem]" href="https://app.kuda.com/dashboard/investments">Invest</a>
                {/* <p className="text-[#b2a2c4] mx-[1rem]">Invest</p> */}
            </div>
            <div className="flex items-center">
                <img src={budget} alt="budget" className="w-[1.5rem]" />
                <p className="text-[#b2a2c4] mx-[1rem]">Budget</p>
            </div>
            <div className="flex items-center">
                <img src={card} alt="card" className="w-[1.5rem]" />
                <p className="text-[#b2a2c4] mx-[1rem]">Card</p>
            </div>
            
            
        </div>
        <div className="flex items-center">
                <img src={account} alt="account" className="w-[2rem] h-[2rem] rounded-full " />
                <h1 className="mx-[0.5rem]">Account</h1>
        </div>


        </nav>

    <div className="flex justify-center">
        <div>
            <h1 className="font-bold text-[2rem] mt-[3rem] text-[#411a6e]" >Invest</h1>
        </div>
    </div>
 <div className="flex  justify-center  ">
    <div className="w-[50rem]"> 
    <div className="flex justify-start mt-[2rem] gap-x-2 ">

      <a href="#" className="flex items-center py-[0.5rem] px-[1rem] bg-white drop-shadow-md rounded-[0.5rem] ">

      <img src={Home_Invest} alt="home" className="w-[1rem] " />
      <p className="mx-[0.7rem] text-[#765a96] " > Home</p>
     </a>
       <a href="#" className="flex items-center py-[0.5rem] px-[1rem] bg-white drop-shadow-md rounded-[0.5rem] ">

       <img src={dollar} alt="us stocks" className="w-[1rem] " />
       <p className="mx-[0.7rem] text-[#765a96] " > Us Stocks</p>
       </a>

    </div>
   <div className="flex  justify-between gap-x-7 ">
     <div className=" items-center bg-white drop-shadow-md rounded-[0.5rem] w-[35rem] h-[22rem] mt-[2rem] ">
        <h1 className="font-bold text-[2rem] mt-[3rem] text-[#411a6e] text-center">Invest with Kuda</h1>
         <img src={invest_logo} alt="" className="w-[8rem] mx-auto " />
         <p className="w-[18rem] text-[1rem] mx-auto">Choose an option to grow your money. Please, remember that investments fluctuate and Kuda doesn’t give investment advice.</p>
     </div>
   <div className="flex flex-col bg-white drop-shadow-md rounded-[0.5rem] gap-y-9 h-[18rem] ">
    <div className="flex  justify-between items-center bg-white drop-shadow-md rounded-[0.5rem] w-[25rem]">
       <div className="">
       <h6 className="font-bold text-[1rem] mt-[3rem] text-[#411a6e] text-center">US Stocks</h6>
       <p className="text-[0.7rem] text-center">Trade thousands of US stocks with as little as $10.</p>
      </div>
        <img src={social_media} alt="" className="w-[4rem] mx-[5rem] " />
        
    </div>
    <div className="flex flex-col bg-white drop-shadow-md rounded-[0.5rem] w-[25rem] h-[10rem]">
        <div className="">
        {/* <p className="mx-[2rem] mt-[2rem]">Coming Soon</p> */}
        <div className="flex bg-white drop-shadow-md rounded-[0.5rem]">
        <div className="">
        <p className="mx-[2rem] mt-[1rem] text-white  bg-yellow-400 p-[0.1rem] mx-[0.2rem] rounded-[0.2rem]">Coming Soon</p>
        <h6 className="font-bold text-[1rem] mt-[0rem] text-[#411a6e] mx-[2.1rem]">Managed Funds</h6>
        <p className="text-[0.7rem] mx-[1.7rem]">Invest in professionally managed products.</p>
        </div>
        <img src={fund} alt="" className="w-[4rem] mx-[5rem] " />
        </div>
        
        {/* <img src={fund} alt="" className="w-[4rem] mx-[5rem] " /> */}
        </div>
    </div>
   
    </div>
    </div>
 </div> 

 </div>
    
    
 
 
 
 
 
 
 
 
 </div>



    )
}


export default Invest;
