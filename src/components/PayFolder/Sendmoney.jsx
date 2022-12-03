import React from "react"
import BlueArrow from "../../img/Svg/Bluearrow.svg"
import AirtimeImage from "../../img/Svg/Airtime.svg"
import PaybillImage from "../../img/Svg/Paybill.svg"
import GiftcardImage from "../../img/Svg/Giftcard.svg"
import CardlessImage from "../../img/Svg/Cardless.svg"
import KudaImage from "../../img/Svg/Kudaimage.svg"
import GreaterThan from "../../img/Svg/Greaterthan.svg"
import HumanImage from "../../img/Svg/Humanimage.svg"
import GreenArrow from "../../img/Svg/Greenarrow.svg"


function Sendmoney(){
    return(
        <main className="container">
                <h1 className="text-2xl text-center text-[#5d3b83] font-bold my-6">Pay</h1>
             <nav className="flex justify-center gap-x-8 mb-10">
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
            </nav> 

            <div className="flex justify-center w-[40rem] h-[25rem] mx-auto bg-white drop-shadow-xl">
                <div className="flex flex-col w-[30rem]">
                        <h2 className="py-5 text-[#010101] font-bold text-xl text-center">Send Money</h2>
                    <a href="#" className="flex justify-center bg-white py-5 drop-shadow-lg">
                        <img src={KudaImage} alt="Kuda K image"  className="w-[2.5rem]"/>
                        <div>
                            <p className="text-[#411a6e] font-bold text-[1rem]">Send to @username</p>
                            <span className="text-[#d6d6d6] font-semibold text-[0.7rem]">Send to any kuda account for free</span>
                        </div>
                        <img src={GreaterThan} alt="" className="w-[0.7rem] ml-[10rem]"/>
                    </a>
                    <br />
                    <a href="#" className="flex justify-center py-4 bg-white drop-shadow-lg">
                        <img src={GreenArrow} alt="Green arrow to send local money" className="w-[2.5rem]"/>
                        <div>
                            <p className="text-[#411a6e] font-bold text-[1rem]">Send to Bank Account</p>
                            <span className="text-[#d6d6d6] font-semibold text-[0.7rem]">Send to a local bank account</span>
                        </div>
                        <img src={GreaterThan} alt="Greaterthan image" className="w-[0.7rem] ml-[10rem]" />
                    </a>
                    <br />
                    <a href="#" className="flex justify-center py-3 bg-white drop-shadow-lg">
                        <img src={HumanImage} alt="Beneficiaries image" className="w-[2.5rem]"/>
                        <div>
                            <p className="text-[#411a6e] font-bold text-[1rem]">Beneficiaries <span className="bg-[#49d38a] text-white">New!</span></p>
                            <span className="text-[#d6d6d6] font-semibold text-[0.7rem]">Send money to your friend quickly</span>
                        </div>
                        <img src={GreaterThan} alt="Greaterthan image" className="w-[0.7rem] ml-[10rem]"/>
                    </a>
                </div>

            </div>
            
        </main>
    )
}

export default Sendmoney