import {IoIosArrowBack} from 'react-icons/io'
import kuds from '../../../img/Svg/kuds.svg'


function Beneficiary (){

    return(

        <main >
        
        <div className="flex justify-center  ">
            <div className=" flex justify-between items-start  m-[5rem] w-[40rem] pl-[2rem] p-[3rem] rounded-lg">

                    <a href="" className="flex">
                        <IoIosArrowBack/>
                        <p className="">Back</p>
                    </a>

                    <div className="w-[20rem] mx-[5rem] border bg-white drop-shadow-lg ">

                        <div className="text-center text-2xl mb-[3rem] ">Beneficiaries</div>
                        <img className='w-[3rem] h-[3rem] mx-auto my-8' src={kuds} alt="svg" />
                        <div className="text-xl px-[1rem] text-center">
                            You don't have any beneficiaries yet</div>
                        <div className="text-sm text-center py-[1rem] px-[1rem]">
                        Click "Add Beneficiary" to add a new beneficiary to your account</div>
                        <button className='mx-[6rem] w-[10rem] h-[3rem] bg-[#411a6e] rounded-lg text-white mt-[3rem]' >Add Beneficiary</button>
                    </div>
            </div>
            
        </div>
        
        </main>
    )
}

export default Beneficiary