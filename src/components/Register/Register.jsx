import Kuda_Logo from '../../img/Svg/Kuda_Logo.svg'
import {BsFillEyeFill} from 'react-icons/bs'


function Register() {
  return (
    <main className='font-Mulish'>
      <nav className=" flex justify-between items-center px-[5rem] mt-5  shadow-white drop-shadow-2xl">
        <div className='hover:transition ease-in-out delay-50'>
          <img src={Kuda_Logo} className=" w-[5rem] " alt="Kuda" />
        </div>
        <button className="border border-[#40196d]  hover:-translate-y-1 duration-700 bg-[#eff1ff] p-2 rounded-lg text-[#40196d]">Open an Account</button>
      </nav>

    <body className="border flex-col w-[32rem] ">
      <div className='flex justify-center my-5'>
        <p className=' bg-[#eff1ff] w-[28rem] p-2 text-[#40196d] text-xs rounded-lg'>Please check that you are visiting the correct URL <b><a href='https://app.kuda.com' className='text-[#49d38a]' >https://app.kuda.com</a></b> </p>
      </div>

      <div className='border p-5 w-[28rem] mx-auto drop-shadow-lg rounded-lg'>
        <h2 className='w-[25rem] text-2xl my-4 font-bold'>Sign Up to Kuda</h2>
        <p className='w-[25rem]'>To sign up, please type in the email address linked to your Kuda account</p>
        
        <form className=' my-5'>
                <label htmlFor="" className='mb-5'>Surname</label>
                <br/>
                  <div className="w-[25rem]">
                    <input type="text"
                      id="Surname"
                      name="Surname"
                      className="rounded-lg w-[25rem] h-[3rem] my-3 p-2"
                      placeholder="Surname"
                      style={{ border: "none", outline: "none" }}
                      required
                    />
                  </div>

                  <label htmlFor="" className='mb-5'>Othernames</label>
                  <br/>
                  <div className="w-[25rem]">
                      <input type="text"
                      id="Othernames"
                      name="Othernames"
                      className="rounded-lg w-[25rem] h-[3rem] my-3 p-2"
                      placeholder="Othernames"
                      style={{ border: "none", outline: "none" }}
                      required
                    />
                  </div>

                    <label htmlFor="">Email</label>
                    <br/>
                    <div className="w-[25rem]">
                      <input type="email"
                        id="Email"
                        name="Email"
                        className="rounded-lg w-[25rem] h-[3rem] my-3 p-2"
                        placeholder="Email"
                        style={{ border: "none", outline: "none" }}
                        required
                      />
                    </div>

                <label htmlFor="">Password</label>
                  <div className="flex items-center my-3 w-[25rem] h-[3rem] justify-between bg-[#fff] rounded-lg">
                    <input type="password"
                      id="Password"
                      name="Password"
                      className="rounded-lg  w-[25rem] h-[3rem] p-2"
                      placeholder="Password"
                      style={{ border: "none", outline: "none" }}
                      required
                    />
                    <span><BsFillEyeFill/></span>
                  </div>

                <label htmlFor="">Repeat Password</label>
                <br/>
                <div className="flex items-center my-3 w-[25rem] h-[3rem] justify-between bg-[#fff] rounded-lg">
                  <input type="password"
                      id="Repeat Password"
                      name="Repeat Password"
                      className="rounded-lg w-[25rem] h-[3rem] p-2"
                      placeholder="Repeat Password"
                      style={{ border: "none", outline: "none" }}
                      required
                    />
                    <span> <BsFillEyeFill/> </span>
                </div>
        </form>
      </div>

    </body>

    </main>
  )
}

export default Register
