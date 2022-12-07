import axios from "axios"
import Kuda_Logo from "../../../img/Svg/Kuda_Logo.svg"
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs"
import { useState } from "react"
import Bkground from "../../../img/Svg/Bkground.svg"

function Register() {
  const [surname, setSurname] = useState("")
  const [othernames, setOthernames] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setConfirmShowPassword] = useState(false)

  const showPasswordDetails = () => setShowPassword(!showPassword)
  const showConfirmPasswordDetails = () =>
    setConfirmShowPassword(!showConfirmPassword)

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
        !confirmPassword
      ) {
        return
      }

      //pick the vlues and hit the backend

      const registerApiCallResponse = await axios({
        method: "post",
        url: `http://localhost:8801/register`,
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          surname: surname,
          othernames: othernames,
          email: email,
          phone: phone,
          password: password,
          repeat_password: confirmPassword,
        },
      })

      if (registerApiCallResponse.data.status === true) {
        alert(registerApiCallResponse.data.message)
      } else {
      }
    } catch (err) {
      alert(err.message)
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
      <nav className=' flex justify-between items-center px-[5rem] mt-5  shadow-white drop-shadow-2xl'>
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
                    className='rounded-lg w-[20rem] h-[3rem] my-3 p-2 bg-[#dfe3ff]'
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
                    className='rounded-lg w-[20rem] h-[3rem] my-3 p-2 bg-[#dfe3ff]'
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
                    className='rounded-lg w-[20rem] h-[3rem] my-3 p-2 bg-[#dfe3ff]'
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
                    className='rounded-lg w-[20rem] h-[3rem] my-3 p-2 bg-[#dfe3ff]'
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
                    className='rounded-lg  w-[20rem] h-[3rem] p-2  bg-[#dfe3ff] '
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
                    type={showPassword ? "text" : "password"}
                    id='Password'
                    name='Password'
                    className='rounded-lg  w-[20rem] h-[3rem] p-2  bg-[#dfe3ff] '
                    placeholder='********'
                    style={{ border: "none", outline: "none" }}
                    required
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />

                  {showPassword ? (
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

            <button
              type='submit'
              className='border border-[#40196d] bg-[#40196d] w-[20rem] mt-[2rem] hover:-translate-y-1 duration-700 p-2 rounded-lg text-white text-sm'
            >
              Register
            </button>
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
