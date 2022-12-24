import axios from "axios"
import Kuda_Logo from "../../../img/Svg/Kuda_Logo.svg"
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs"
import { useState, useEffect } from "react"
import Bkground from "../../../img/Svg/Bkground.svg"
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from "react-router-dom"
import BigProcessingButton from "../../shared-components/Button/BigProcessingButton"
import { Toast } from "../../shared-components/Toast/Toast"
import { RegisterEndpoint } from "../../../api/url/url"
import { Post } from "../../../api/httpMethods/httpMethods"

function Register() {
  const redirect = useNavigate()

  const [surname, setSurname] = useState("")
  const [othernames, setOthernames] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setConfirmShowPassword] = useState(false)
  const [isSubmitting, setIsSubmmitting] = useState(0) //0=not submitted, 1=submitting, 2 for submmitted
  const [disabledOption, setDisabledOption] = useState(false)

  const showPasswordDetails = () => setShowPassword(!showPassword)

  const showConfirmPasswordDetails = () => {
    setConfirmShowPassword(!showConfirmPassword)
  }

  async function submitRegisterForm(e) {
    try {
      e.preventDefault() //prevent the page from reload

      //validation
      if (
        !surname ||
        !othernames ||
        !email ||
        !phone ||
        !password ||
        !confirmPassword ||
        password !== confirmPassword
      ) {
        throw new Error("All the fields are compulsory")
      }
      const body = {
        surname: surname,
        othernames: othernames,
        email: email,
        phone: phone,
        password: password,
        repeat_password: confirmPassword,
      }

      //pick the vlues and hit the backend
      setIsSubmmitting(1)
      setDisabledOption(true)

      const registerApiCallResponse = await Post(RegisterEndpoint, body)

      setIsSubmmitting(2)
      if (registerApiCallResponse.data.status === true) {
        //route to VerifyEmailOtp screen
        const objToSave = {
          email: email,
          phone: phone,
        }

        localStorage.setItem("userData", JSON.stringify(objToSave))
        redirect("/register/verify-otp")
      } else {
        Toast("error", registerApiCallResponse.data.error.message)
      }
    } catch (err) {
      setIsSubmmitting(0)
      setDisabledOption(false)
      Toast("error", err.message)
    }
  }

  return (
    <main
      className='font-Mulish'
      style={{
        backgroundImage: `url(${Bkground})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right",
      }}
    >
      <nav className=' flex justify-between items-center px-[5rem] mt-5 3'>
        <div className='hover:transition ease-in-out delay-50'>
          <img src={Kuda_Logo} className=' w-[5rem] ' alt='Kuda' />
        </div>
        <button
          type='submit'
          className='border border-[#40196d] w-[10rem]  hover:-translate-y-1 duration-700 bg-[#eff1ff] p-2 rounded-[3rem] text-green-500'
        >
          Open an Account
        </button>
      </nav>

      <div className='mx-[2rem] flex-col w-[60rem]'>
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

        <div className='p-5 w-[50rem] mx-auto drop-shadow-lg rounded-lg'>
          <h2 className='w-[25rem] text-2xl my-4 font-bold'>Sign Up to Kuda</h2>
          <p className='w-[25rem]'>
            To sign up, please type in the email address linked to your Kuda
            account
          </p>

          <form onSubmit={submitRegisterForm} className='my-5'>
            <div className='flex justify-between'>
              <div className=''>
                <label htmlFor='' className='mb-5 text-sm'>
                  Surname
                </label>
                <br />
                <div className='w-[20rem]'>
                  <input
                    type='text'
                    id='Surname'
                    name='Surname'
                    className='rounded-lg w-[20rem] h-[3rem] my-3 p-2 bg-[#dfe3ff] focus:ring-0'
                    placeholder='Surname'
                    style={{ border: "none", outline: "none" }}
                    required
                    onChange={(e) => setSurname(e.target.value)}
                  />
                </div>
              </div>

              <div className=''>
                <label htmlFor='' className='mb-5 text-sm'>
                  Othernames
                </label>
                <br />
                <div className='w-[20rem]'>
                  <input
                    type='text'
                    id='Othernames'
                    name='Othernames'
                    className='rounded-lg w-[20rem] h-[3rem] my-3 p-2 bg-[#dfe3ff] focus:ring-0'
                    placeholder='Othernames'
                    style={{ border: "none", outline: "none" }}
                    required
                    onChange={(e) => setOthernames(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className='flex justify-between '>
              <div className=''>
                <label htmlFor='' className='text-sm'>
                  Email
                </label>
                <br />
                <div className='w-[20rem]'>
                  <input
                    type='email'
                    id='Email'
                    name='Email'
                    className='rounded-lg w-[20rem] h-[3rem] my-3 p-2 bg-[#dfe3ff] focus:ring-0'
                    placeholder='Abc@gmail.com'
                    style={{ border: "none", outline: "none" }}
                    required
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              <div className=''>
                <label htmlFor='' className='text-sm'>
                  Phone-Number
                </label>
                <br />
                <div className='w-[20rem]'>
                  <input
                    type='tel'
                    id='tel'
                    name='telephone'
                    className='rounded-lg w-[20rem] h-[3rem] my-3 p-2 bg-[#dfe3ff] focus:ring-0'
                    placeholder='081********'
                    style={{ border: "none", outline: "none" }}
                    required
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className='flex justify-between'>
              <div className=''>
                <label htmlFor='' className='text-sm'>
                  Password
                </label>
                <div className='flex items-center my-3 w-[20rem] h-[3rem] justify-between bg-[#dfe3ff] rounded-lg'>
                  <input
                    type={showPassword ? "text" : "password"}
                    id='Password'
                    name='Password'
                    className='rounded-lg  w-[20rem] h-[3rem] p-2  bg-[#dfe3ff] focus:ring-0'
                    placeholder='********'
                    style={{ border: "none", outline: "none" }}
                    required
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  {showPassword ? (
                    <BsFillEyeSlashFill
                      className='mr-5'
                      onClick={showPasswordDetails}
                    />
                  ) : (
                    <BsFillEyeFill
                      className='mr-5'
                      onClick={showPasswordDetails}
                    />
                  )}
                </div>
              </div>

              <div className=''>
                <label htmlFor='' className='text-sm'>
                  Repeat Password
                </label>
                <br />
                <div className='flex items-center my-3 w-[20rem] h-[3rem] justify-between bg-[#dfe3ff] rounded-lg'>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    id='ResetPassword'
                    name='ResetPassword'
                    className='rounded-lg  w-[20rem] h-[3rem] p-2  bg-[#dfe3ff] focus:ring-0'
                    placeholder='********'
                    style={{ border: "none", outline: "none" }}
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />

                  {showConfirmPassword ? (
                    <BsFillEyeSlashFill
                      className='mr-5'
                      onClick={showConfirmPasswordDetails}
                    />
                  ) : (
                    <BsFillEyeFill
                      className='mr-5'
                      onClick={showConfirmPasswordDetails}
                    />
                  )}
                </div>
              </div>
            </div>
            <br />
            <input type='checkbox' /> I agree with the terms and condition{" "}
            <br />
            <BigProcessingButton
              isSubmitting={isSubmitting}
              text='Register'
              disabled={disabledOption}
            />
            <p className='py-3'>
              Click{" "}
              <b>
                <a href='/login' className='text-[#40196d]'>
                  here
                </a>
              </b>{" "}
              to login, if you have an account with us
            </p>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Register
