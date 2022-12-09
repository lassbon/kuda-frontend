import { useState } from "react"
import OtpInput from "react18-otp-input"
import Kuda_Logo from "../../../img/Svg/Kuda_Logo.svg"
import Phone from "../../../img/Svg/Phone.svg"
import BigProcessingButton from "../../shared-components/Button/BigProcessingButton"
import axios from "axios"

function VerifyEmailOtp() {
  // const style =
  const [emailOtp, setEmailOtp] = useState("")
  const [disabledOption, setDisabledOption] = useState(true)

  const handleEmailChange = (enteredOtp) => {
    if (enteredOtp.length === 6) {
      setDisabledOption(false)
    }

    setEmailOtp(enteredOtp)
  }

  async function onEmailOtpVerifyBtnClick() {
    try {
      const { email, phone } = localStorage.getItem("userData")

      if (emailOtp.length < 6) {
        throw new Error("Invalid otp")
      }

      const getEmailOtpResponseApiCall = await axios({
        method: "get",
        url: `http://localhost:8801/verify-email-otp/${emailOtp}/${email}/${phone}`,
        headers: {
          "Content-Type": "application/json",
        },
      })

      if (getEmailOtpResponseApiCall.data.status === true) {
        //navigte to phobe verify otp screen
      }
      alert(getEmailOtpResponseApiCall.data.message)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <main className='font-Mulish'>
      <nav className=' flex justify-between items-center px-[5rem] mt-5  shadow-white drop-shadow-2xl'>
        <div className='hover:transition ease-in-out delay-50'>
          <img src={Kuda_Logo} className=' w-[5rem] ' alt='Kuda' />
        </div>
        <button
          type='submit'
          className='border border-[#40196d] w-[10rem]  hover:-translate-y-1 duration-700 bg-[#eff1ff] p-2 rounded-lg text-green-500'
        >
          Open an Account
        </button>
      </nav>

      <div className='mx-[2rem] flex-col w-[32rem] '>
        <div className='flex justify-center my-5'>
          <p className=' bg-[#eff1ff] w-[28rem] p-2 text-[#40196d] text-xs rounded-lg'>
            Please check that you are visiting the correct URL{" "}
            <b>
              <a href='https://app.kuda.com' className='text-[#49d38a]'>
                https://app.kuda.com
              </a>
            </b>{" "}
          </p>
        </div>

        <div className='border p-[2rem] w-[28rem] mx-auto drop-shadow-lg rounded-lg'>
          <img src={Phone} className='w-[2rem]' alt='Phone' />
          <h2 className='w-[25rem] text-2xl my-4 font-bold'>
            Confirm Kuda Account
          </h2>
          <p className='w-[25rem] text-sm my-5'>
            Please, enter the OTP we just sent to your email.
          </p>

          {/* <div className="flex justify-between h-[2rem] my-[2rem] text-center ">
            <div className="border w-[3rem] h-[3rem] rounded-lg drop-shadow-lg ">-</div>
            <div className="border w-[3rem] h-[3rem] rounded-lg drop-shadow-lg">-</div>
            <div className="border w-[3rem] h-[3rem] rounded-lg drop-shadow-lg">-</div>
            <div className="border w-[3rem] h-[3rem] rounded-lg drop-shadow-lg">-</div>
            <div className="border w-[3rem] h-[3rem] rounded-lg drop-shadow-lg">-</div>
        </div> */}

          <OtpInput
            placeholder={"------"}
            numInputs={6}
            value={emailOtp}
            separator={<span>&nbsp; &nbsp;</span>}
            onChange={handleEmailChange}
            inputStyle={{
              fontFamily: "monospace",
              margin: "4px",
              MozAppearance: "textfield",
              width: "40px",
              borderRadius: "3px",
              fontSize: "14px",
              height: "40px",
              paddingLeft: "7px",
              backgroundColor: "white",
              color: "black",
              border: "1px solid lightskyblue",
            }}
          />

          <p className='text-[#49d38a] text-xs font-bold my-5'>
            <a href='#'>Resend Code</a>
          </p>

          <BigProcessingButton
            text='Verify Otp'
            onClick={onEmailOtpVerifyBtnClick}
            disabled={disabledOption}
          />
          {/* <button
            type='submit'
            className='border border-[#40196d] bg-[#40196d] w-[10rem] mt-[2rem] hover:-translate-y-1 duration-700 p-2 rounded-lg text-white text-sm '
          >
            Verify
          </button> */}
        </div>
      </div>
    </main>
  )
}
export default VerifyEmailOtp
