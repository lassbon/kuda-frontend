import React from "react"
import BlueArrow from "../../img/Svg/Bluearrow.svg"
import AirtimeImage from "../../img/Svg/Airtime.svg"
import PaybillImage from "../../img/Svg/Paybill.svg"
import GiftcardImage from "../../img/Svg/Giftcard.svg"
import CardlessImage from "../../img/Svg/Cardless.svg"



function PayNavbar() {
    return(
        <div className="flex justify-center gap-x-8 mb-10">
            <a href="#" className="flex items-center bg-white drop-shadow-xl py-[0.5rem] px-[0.6rem] rounded-[0.5rem] ">
            <img src={BlueArrow} alt="Send arrow" className="w-[0.6rem]" /> &nbsp;
            <p className="text-[#b4b4b4] font-semibold">Send Money</p>
        </a>
            
        <a href="#" className="flex items-center bg-white drop-shadow-xl py-[0.5rem] px-[0.6rem] rounded-[0.5rem]"> 
            <img src={AirtimeImage} alt="Buy airtime" className="w-[0.5rem]"/>&nbsp;
            <p className="text-[#b4b4b4] font-semibold">Buy Airtime</p>
        </a>
        <a href="#" className="flex items-center bg-white drop-shadow-xl py-[0.5rem] px-[0.6rem] rounded-[0.5rem]">
            <img src={PaybillImage} alt="Cardless Paybill" className="w-[0.6rem]"/>&nbsp;
            <p className="text-[#b4b4b4] font-semibold">Pay A Bill</p>
        </a>
        <a href="#" className="flex items-center bg-white drop-shadow-xl py-[0.5rem] px-[0.6rem] rounded-[0.5rem]">
            <img src={GiftcardImage} alt="Gift Cards" className="w-[0.7rem]"/>&nbsp;
            <p className="text-[#b4b4b4] font-semibold">Gift Cards</p>
        </a>
        <a href="#" className="flex text-[#b4b4b4] items-center bg-white drop-shadow-xl py-[0.5rem] px-[0.6rem] rounded-[0.5rem]">
            <img src={CardlessImage} alt="" className="w-[0.7rem]" />&nbsp;
            <p className="font-semibold">Cardless Payments</p>
        </a>
        
</div> 
    )
}



export default PayNavbar
