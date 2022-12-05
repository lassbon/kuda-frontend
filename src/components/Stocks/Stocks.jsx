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
import stock_social_logo from "../../img/Svg/Stock_Social_Logo.svg"
import bamboo from "../../img/Svg/Bamboo.svg"



function Stocks () {

    return (
        <div className="">
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

{/* <div className="flex justify-start mt-[2rem] gap-x-2 "> */}
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
 </div>
</div>
 <div className="flex justify-center">

   <div className="flex w-[25rem]">
    <img src={stock_social_logo} alt="" className="w-[]"/>
   </div>
   {/* <div className="flex flex-col">
    <h2 className="">Investments made easy</h2>
   </div> */}
</div>
<div className="flex flex-col mx-[40rem]">
    <h2 className="font-bold text-[1.3rem] mt-[3rem] text-[#411a6e]">Investments made easy</h2>
    <p className="text-[0.9rem] text-[black]">Buy stocks with as little as $10.</p>
   </div>
   <div className="flex flex-col items-center">
   <button type="submit" className=" text-white font-semibold bg-[#411a6e] w-[15rem] py-[0.8rem] px-[0.7rem] rounded-[1rem] text-center mt-[2rem] mb-[3rem] hover:-translate-y-1 duration-700 ">Find A Stock</button>
    <p className=" w-[20rem]">Kuda doesn’t give investment advice. Please, consult your legal, financial and tax advisers before you buy stocks.</p>
    <div className="flex gap-x-2 w-[13rem] h-[2rem]">
        <p className="self-end">Powered by </p>
        <img src={bamboo} alt="" className="w-[5rem] text-[#19cd9d]"/>
    </div>
   </div>



   
  







        </div>
    )
}


export default Stocks