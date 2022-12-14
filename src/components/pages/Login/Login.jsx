import Kuda_Logo from "../../../img/Svg/Kuda_Logo.svg"
import { BsFillEyeFill } from "react-icons/bs"
import { useState, useEffect } from "react"
import { Toast } from "../../shared-components/Toast/Toast"
import { Post } from "../../../api/httpMethods/httpMethods"
import { loginEndpoint } from "../../../api/url/url"
import { useNavigate } from "react-router-dom"
function Login() {
  const redirect = useNavigate()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  async function HandleLogin(e) {
    try {
      e.preventDefault()
      if (email === "" || password === "") {
        Toast("error", "All fields are compulsory")
      }
      const body = {
        email: email,
        password: password,
      }

      const apiCallToLogin = await Post(loginEndpoint, body)
      if (apiCallToLogin.data.status === true) {
        Toast("success", apiCallToLogin.data.message)
        localStorage.setItem("token", apiCallToLogin.data.token)
        setTimeout(() => {
          redirect("/dashboard")
        }, 3000)
      } else {
        Toast("error", apiCallToLogin.data.response.data.message)
      }
    } catch (err) {
      console.log("ere: ", err)
      Toast("error", err.response.data.message)
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
          className='border border-[#40196d] w-[10rem]  hover:-translate-y-1 duration-700 bg-[#eff1ff] p-2 rounded-[3rem] text-green-500'
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

        <div className='border p-5 w-[28rem] mx-auto drop-shadow-lg rounded-lg'>
          <h2 className='w-[25rem] text-2xl my-4 font-bold'>Sign Up to Kuda</h2>
          <p className='w-[25rem]'>
            To sign up, please type in the email address linked to your Kuda
            account
          </p>

          <form onSubmit={HandleLogin} className=' my-5'>
            <label htmlFor='' className='text-sm'>
              Email
            </label>
            <br />
            <div className='w-[25rem]'>
              <input
                type='email'
                id='Email'
                name='Email'
                className='rounded-lg w-[25rem] h-[3rem] my-3 p-2 focus:ring-0'
                placeholder='Abc@gmail.com'
                style={{ border: "none", outline: "none" }}
                required
                onChange={(e) => {
                  setEmail(e.target.value)
                }}
              />
            </div>

            <label htmlFor='' className='text-sm'>
              Password
            </label>
            <div className='flex items-center my-3 w-[25rem] h-[3rem] justify-between bg-[#fff] rounded-lg'>
              <input
                type='password'
                id='Password'
                name='Password'
                className='rounded-lg  w-[23rem] h-[3rem] p-2 focus:ring-0'
                placeholder='********'
                style={{ border: "none", outline: "none" }}
                required
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
              <BsFillEyeFill className='mr-5' />
            </div>

            <button
              type='submit'
              className='border border-[#40196d] bg-[#40196d] w-[10rem] mt-[2rem] hover:-translate-y-1 duration-700 p-2 rounded-lg text-white text-sm'
            >
              Login
            </button>
            <p className='py-3'>
              Click{" "}
              <b>
                <a href='/register' className='text-[#40196d]'>
                  here
                </a>
              </b>{" "}
              to register, if you dont have an account with us
            </p>
          </form>
        </div>
      </div>
    </main>
  )
}

export default Login
