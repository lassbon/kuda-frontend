import { useEffect, useState } from "react"
import logo from "../../../img/Svg/Kuda_Logo.svg"
import home from "../../../img/Svg/Home.svg"
import pay from "../../../img/Svg/Pay.svg"
import invest from "../../../img/Svg/Invest.svg"
import budget from "../../../img/Svg/Budget.svg"
import card from "../../../img/Svg/Card.svg"
import account from "../../../img/account.jpg"
import flag from "../../../img/Svg/Flag.svg"
import convert from "../../../img/Svg/Convert.svg"
import addMoney from "../../../img/Svg/AddMoney.svg"
import { FaCcMastercard } from "react-icons/fa"
import { AiOutlineSave } from "react-icons/ai"
import { SiAbbrobotstudio } from "react-icons/si"
import background from "../../../img/Svg/Background.svg"
import beneficiaries from "../../../img/Svg/Beneficiaries.svg"
import { MdOutlineCancel } from "react-icons/md"
import request from "../../../img/Svg/Request.svg"
import Container from "../Container/Container"
import { Get } from "../../../api/httpMethods/httpMethods"
import {
  ProfileEndpoint,
  TransactionHistoryEndpoint,
} from "../../../api/url/url"
import EmptyTransactionCard from "./EmptyTransactionCard"
import { Toast } from "../../shared-components/Toast/Toast"
import TransactionCard from "./TransactionCard"

function Dashboard() {
  const [userData, setUserData] = useState({
    status: true,
    message: "",
    data: {
      sn: 1,
      customer_id: "",
      title: "",
      lastname: "",
      othernames: "",
      email: "",
      is_email_verified: true,
      phone_number: "",
      is_phone_number_verified: true,
      gender: "",
      house_number: "",
      street: "",
      landmark: "",
      local_govt: "",
      dob: "",
      nin: "",
      is_nin_verified: "",
      bvn: "",
      is_bvn_verified: "",
      country: null,
      state_origin: null,
      local_govt_origin: null,
      means_of_id: null,
      means_of_id_number: null,
      is_means_of_id_number_verified: null,
      photo: null,
      marital_status: null,
      is_disable: false,
      is_disable_reason: null,
      createdAt: "",
      updatedAt: "",
      accts: {
        account_number: "",
        account_name: "",
        balance: 0.0,
      },
      wallet: {
        sn: null,
        wallet_id: "",
        wallet_type: null,
        balance: 0.0,
        currency: null,
        customer_id: "",
        createdAt: null,
        updatedAt: null,
      },
    },
  })
  const [transactionHistory, setTransactionHistory] = useState([])

  useEffect(() => {
    return async () => {
      try {
        const token = localStorage.getItem("token")

        const getUserProfileFromApi = await Get(ProfileEndpoint, token)
        const getTransactionHistoryFromApi = await Get(
          TransactionHistoryEndpoint,
          token
        )
        const newObj = {
          ...userData,
          status: getUserProfileFromApi.data.status,
          message: getUserProfileFromApi.data.message,
          data: {
            ...userData.data,
            accts: {
              ...userData.data.accts,
              account_number:
                getUserProfileFromApi.data.data.accts.account_number,
            },
            wallet: {
              ...userData.data.wallet,
              balance: getUserProfileFromApi.data.data.wallet.balance,
            },
          },
        } //this is a new memory that allow react to re-render the component
        setUserData(newObj)
        setTransactionHistory(
          ...transactionHistory,
          getTransactionHistoryFromApi.data.data
        )
      } catch (error) {
        Toast("error", error.response.data.message)
      }
    }
  }, [userData.data.wallet.balance])

  return (
    <Container>
      <div className='font-Mulish  '>
        <div className='flex justify-center '>
          <div>
            <div className='flex justify-between mt-[3rem] w-[40rem] '>
              <div className='flex  items-center'>
                <img src={flag} alt='flag' className='w-[3rem] ' />
                <div className=' mx-[1rem]'>
                  <h2 className='font-semibold text-[0.7em] '>
                    Nigerian Naira
                  </h2>
                  <h3 className='font-bold text-[2rem] '>
                    #{userData.data.wallet.balance || "0.00"}
                  </h3>
                </div>
              </div>
              <div className='flex flex-col gap-y-2'>
                <div
                  disable
                  href='#'
                  className='flex py-[0.5rem] px-[1rem] bg-white drop-shadow-md rounded-[0.5rem] '
                >
                  <img src={convert} alt='convert' className='w-[1rem] ' />
                  <p className='mx-[0.7rem] text-[#765a96]'> Convert</p>
                </div>
                <a
                  href='#'
                  className='flex py-[0.5rem] px-[1rem] bg-white drop-shadow-md rounded-[0.5rem] hover:-translate-y-1 duration-700 '
                >
                  <img src={addMoney} alt='addMoney' className='w-[1rem] ' />
                  <p className='mx-[0.7rem] text-[#765a96] '> Add Money</p>
                </a>
              </div>
            </div>

            <div className='flex justify-start mt-[2rem] gap-x-2 '>
              <a
                href='#'
                className='flex items-center py-[0.5rem] px-[1rem] bg-white drop-shadow-md rounded-[0.5rem] '
              >
                <FaCcMastercard className='text-[#765a96]' />
                <p className='mx-[0.7rem] text-[#765a96] '> Spend</p>
              </a>
              <a
                href='#'
                className='flex items-center py-[0.5rem] px-[1rem] bg-white drop-shadow-md rounded-[0.5rem] '
              >
                <AiOutlineSave className='text-[#765a96]' />
                <p className='mx-[0.7rem] text-[#765a96] '> Save</p>
              </a>
              <a
                href='#'
                className='flex items-center py-[0.5rem] px-[1rem] bg-white drop-shadow-md rounded-[0.5rem] '
              >
                <SiAbbrobotstudio className='text-[#765a96]' />
                <p className='mx-[0.7rem] text-[#765a96] '> Borrow</p>
              </a>
            </div>

            <div
              className='w-[40rem] drop-shadow-2xl  py-[2rem] px-[1rem] bg-[#fff5db] mt-[2rem] border rounded-[1rem]'
              style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
              }}
            >
              <p className='font-bold text-[0.8rem] '>
                Your NGN account is all set
              </p>
              <h5 className='w-[18rem] text-[0.6rem] text-[#b6b3ab] '>
                We’re really happy that you picked us to look after your money.
                Your Naira account number is{" "}
                <span className='font-semibold text-red-900'>
                  {userData.data.accts.account_number || "N/A"}
                </span>{" "}
              </h5>
            </div>

            <div className='flex justify-between items-center mt-[2rem] px-[2rem] p-[1rem] rounded-[0.5rem] bg-white drop-shadow-md'>
              <img
                src={beneficiaries}
                alt='beneficiaries'
                className=' w-[3rem] '
              />
              <div className=' mx-[1rem] '>
                <h6 className=' font-semibold text-black'>
                  Beneficiaries
                  <span className='text-white  bg-green-400 p-[0.1rem] mx-[0.2rem] rounded-[0.2rem] '>
                    NEW!
                  </span>{" "}
                </h6>
                <h1 className=''>
                  Add people to your beneficiaries and make transfers quicker.
                </h1>
              </div>
              <a href='' className=''>
                <MdOutlineCancel className='text-[#e7e5e5]' />
              </a>
            </div>

            <div className=' mt-[2rem] '>
              <div className='flex flex-col items-center   mx-[1rem] w-fill '>
                {transactionHistory.length === 0 ? (
                  <EmptyTransactionCard />
                ) : (
                  transactionHistory.map((item) => (
                    <TransactionCard data={item} />
                  ))
                )}

                <button
                  type='submit'
                  className=' text-white font-semibold bg-[#411a6e] w-[15rem] py-[0.8rem] px-[0.7rem] rounded-[1rem] text-center mt-[2rem] mb-[3rem] hover:-translate-y-1 duration-700 '
                >
                  Request Statement
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  )
}

export default Dashboard
