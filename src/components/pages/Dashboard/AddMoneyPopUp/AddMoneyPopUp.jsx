import { useState } from "react"
import {
  startFundWalletEndpoint,
  completeFundWalletEndpoint,
} from "../../../../api/url/url"
import { Post } from "../../../../api/httpMethods/httpMethods"
import { PaystackButton } from "react-paystack"
import { Toast } from "../../../shared-components/Toast/Toast"

function AddMoneyPopUp() {
  const [showModal, setShowModal] = useState(true)
  const [amountToPay, setAmountToPay] = useState(0)
  const [userEmail, setUserEmail] = useState("")

  const token = localStorage.getItem("token")

  const OnSuccess = async ({ reference }) => {
    try {
      console.log(`here: ${completeFundWalletEndpoint}/${reference}`)
      const completePaymentEndpPoint = await Post(
        `${completeFundWalletEndpoint}/${reference}`,
        {},
        token
      )
      if (completePaymentEndpPoint.data.status === true) {
        Toast("success", completePaymentEndpPoint.data.message)
      }
    } catch (error) {
      Toast("error", error.message)
    }
    //call the complete wallet endpoint
  }
  const componentProps = {
    email: userEmail || "roshbon@gmail.com",
    amount: amountToPay * 100,
    publicKey: "pk_test_4f8aeda3476ce6a694520d945d75ba6da6445de1",
    text: "Add Funds",
    onSuccess: (reference) => OnSuccess(reference),
    onClose: () => console.log("Wait! Oga Ade , fund youer wallet biko"),
  }

  async function handlePaySubmit(e) {
    e.preventDefault()

    const user = JSON.parse(localStorage.getItem("user"))
    setUserEmail(user.data.email)
    const token = localStorage.getItem("token")
    //call the start wall endpoint
    try {
      const body = {
        email: userEmail || "roshbon@gmail.com",
        amount: amountToPay,
      }

      const startFundWallet = await Post(startFundWalletEndpoint, body, token)
      console.log(startFundWallet.data)
      setShowModal(false)

      //  window.location.href = startFundWallet.data.data.authorization_url
      // console.log(startFundWallet.data.data.authorization_url
      //     )
      // <StartPay email={userEmail} amount={amountToPay} />
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      {showModal ? (
        <>
          <div className='fixed inset-0 z-10 overflow-y-auto'>
            <div
              className='fixed inset-0 w-full h-full bg-black opacity-40'
              onClick={() => setShowModal(false)}
            ></div>
            <div className='flex items-center min-h-screen px-4 py-8'>
              <div className='relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg'>
                <div className='w-full flex justify-between text-gray-600 mb-3'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='icon icon-tabler icon-tabler-wallet'
                    width={52}
                    height={52}
                    viewBox='0 0 24 24'
                    strokeWidth={1}
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  >
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <path d='M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12' />
                    <path d='M20 12v4h-4a2 2 0 0 1 0 -4h4' />
                  </svg>

                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    aria-label='Close'
                    className='icon icon-tabler icon-tabler-x'
                    width={20}
                    height={20}
                    viewBox='0 0 24 24'
                    strokeWidth='2.5'
                    stroke='currentColor'
                    fill='none'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    onClick={() => setShowModal(false)}
                  >
                    <path stroke='none' d='M0 0h24v24H0z' />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </div>
                <form onSubmit={handlePaySubmit}>
                  <h1 className='text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4'>
                    Fund Wallet
                  </h1>
                  <label
                    htmlFor='name'
                    className='text-gray-800 text-sm font-bold leading-tight tracking-normal'
                  >
                    Amount
                  </label>
                  <input
                    id='name'
                    className='mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border'
                    placeholder='20,000'
                    required
                    type='number'
                    min='1000'
                    onChange={(e) => setAmountToPay(e.target.value)}
                  />
                  <div className='flex items-center justify-start w-full'>
                    {/* <button
                      type='submit'
                      className='focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm'
                    >
                      Add Funds
                    </button> */}
                    {amountToPay < 1000 ? (
                      <button
                        disabled={true}
                        className='bg-[#411A6E] transition duration-150 ease-in-out rounded text-white px-8 py-2 text-sm'
                      >
                        {" "}
                        Add Funds{" "}
                      </button>
                    ) : (
                      <PaystackButton
                        className='bg-[#411A6E] focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600  rounded text-white px-8 py-2 text-sm'
                        {...componentProps}
                      />
                    )}

                    <button className='focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm'>
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  )
}

export default AddMoneyPopUp
