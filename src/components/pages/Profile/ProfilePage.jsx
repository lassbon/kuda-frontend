// import { useEffect } from 'react'
import { FiChevronLeft,FiChevronRight} from 'react-icons/fi'
import {IoMdArrowDropdown} from 'react-icons/io'
import { IoCopy } from 'react-icons/io5'
import flag from "../../../img/nig_flag.png"
import Card from './components/Card'

const ProfilePage = () => {
    // const [profileInfo, setProfileInfo]= useState(null)
    // useEffect(() => {
    //     const getProfileInfo = async () => {
    //       try {
    //         const token = localStorage.getItem("token")
    
    //         const getUserProfileFromApi = await Get(ProfileEndpoint, token)
    //         console.log(getUserProfileFromApi)
    //         if(!getUserProfileFromApi.status) throw new Error('diariz froblem')
    //         //setProfileInfo(getUserProfileFromApi.data)
           
    //       } catch (error) {
    //         Toast("error", error.response.data.message)
    //       }
    //     }
    //     getProfileInfo() 
    // }, [])
  return (
    <div className='flex justify-center'>
        <div className="container w-full max-w-[800px] pt-4 bg-white drop-shadow-2xl px-4" >
            <div className="header flex justify-center items-center gap-4 mb-24">
                <span className='text-2xl font-bold'>Profile </span>
                <span><img className='w-[30px] h-[30px]' src={flag} alt="Nigeria's Flag" /></span>
            </div>
            <div className="back flex items-center ml-2 mb-2">
                <button><FiChevronLeft /></button>
                <span>Back</span>
            </div>
            <div className='profile  flex justify-center items-center gap-8 mb-12 px-2'>
                <div className="profile-photo bg-gray-200 w-[100px] h-[100px] rounded-full"></div>
                <div className="profile-info">
                    <div className='font-bold text-black flex justify-between border-2 gap-32'>
                      <span className='mb-4'>Aminah Adedeji</span>  
                      <span className='text-md'>TO</span>
                    </div>
                    <p className='font-semibold'>Copy Username</p>
                    <div className='text-lg flex justify-start items-center gap-4'>
                      <span>
                         <IoCopy className='w-[1.3rem] h-[1.3rem]' /> 
                      </span>{" "}
                      <span> @siqlib</span>
                    </div>
                </div>       
            </div>
            <div className="form flex flex-col sm:flex-row gap-8 my-8 px-4 pt-2 mb-20">
                <div className="left flex-1 ">
                    <Card label='Your Username' value="19 Amoda Alli, Kosofe, Lagos State"/>
                    <Card label='House Address' value='get-request'/>
                    <Card label='Phone Number' value='Phone Number'/>
                    <Card label='Next of Kin' value='Next of Kin'/>
                    <div className="card mb-4  font-semibold ">
                         
                         <div className="shadow-4xl ">
                <           a href="/" className=' text-red-500 text-lg border-3 border-blue-800 flex justify-between items-center p-5'>
                                <span>Block Account</span>
                                <span><FiChevronRight /></span>
                             </a>
                        </div>
                     </div>
                    
                </div>
                <div className="right flex-1">
                  
                    <Card label='Account Name' value='Account Name'/>
                    <Card label='Email Address' value='Email Address'/>
                    <Card label='Identification' value='Identification'/>
                    <div className="card mb-4  font-semibold ">
                         <div className='label mb-4'>
                             <label htmlFor="username">Status</label>
                         </div>
                        <div className=" rounded-lg shadow-4xl">
                            <a href="/" className='flex items-center gap-4 p-4 text-lg '>
                                <span><IoMdArrowDropdown className='text-xl' /></span>
                                <span>Status</span>
                            </a>
                        </div>
                    </div>
                    
                </div>

            </div>
        </div>
      </div>
  )
}

export default ProfilePage