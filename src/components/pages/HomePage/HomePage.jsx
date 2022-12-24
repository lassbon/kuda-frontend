import React from "react"
import { BiQrScan } from "react-icons/bi"
import Naria from "../../../img/Svg/Naria.svg"
import Note from "../../../img/Svg/Note.svg"
import logo from "../../../img/Svg/nav1.svg"
import logo2 from "../../../img/Svg/nav2.svg"
import kuda from "../../../img/Svg/kuda.svg"
import Man from "../../../img/Svg/man.svg"
import appstore from "../../../img/Svg/appstore.svg"
import google from "../../../img/Svg/google.svg"
import signin from "../../../img/Svg/signin.svg"
import twitter from "../../../img/Svg/twitter.svg"
import instagram from "../../../img/Svg/instagram.svg"
import facebook from "../../../img/Svg/facebook.svg"
import mon from "../../../img/Svg/mon.svg"
import link from "../../../img/Svg/link.svg"
import youtube from "../../../img/Svg/youtube.svg"

function HomePage() {
  return (
    <>
      <main className=' font-Mulish'>
        <nav className='pr-[5rem] flex justify-between px-[3rem] border drop-shadow-lg items-center'>
          <div className='flex'>
            <div></div>
            <button className='mx-3 text-[0.9rem] text-[#745895]'>
              <img src={logo} alt='logo' />
            </button>
            <button className='mx-3 text-[0.9rem] text-[#745895]'>
              Features
            </button>
            <button className='flex mx-3 text-[0.9rem] text-[#745895]'>
              <p>Business</p>
              <p className='mx-2 text-[#745895]'>Beta</p>
            </button>
            <button className='mx-3 text-[0.9rem] text-[#745895]'>
              Company
            </button>
            <button className='mx-3 text-[0.9rem] text-[#745895]'>Help</button>
          </div>
          <div className='flex p-[1rem] items-center'>
            <a href='/login'>
              <button className='mx-3 text-[0.9rem] text-[#745895]'>
                Sign In
              </button>
            </a>
            <a href='/register'>
              <button className='mx-3 bg-[#40196d] rounded-[0.7rem] text-white font-bold py-2 px-7 translate-y-1 duration-120ms'>
                Get Kuda
              </button>
            </a>
            <div className='border'>
              <img src={logo2} alt='logo 2' />
            </div>
          </div>
        </nav>
        <div className='flex justify-center h-screen '>
          <div className=' flex flex-col mt-[5rem] w-[70rem]'>
            <div className='flex  justify-between  items-center'>
              <div className='mx-[5rem]'>
                <h1 className='    w-[25rem] text-[#40196d] text-[2.5rem] font-[Mulish] '>
                  Download Kuda from Zulfah , open an account!
                </h1>
                <h1 className=' mt-[1rem]  w-[22rem] '>
                  Scan the QR code below with your phone camera to download the
                  Kuda app.
                </h1>
                {/* <img src={Barcode} alt="barcode" className="" /> */}
                <BiQrScan className=' border  h-[10rem] w-[10rem]' />
              </div>

              <img
                src='https://kuda.com/static/kuda-open-account-f4e3470032362b8f5751a7254f173bcf.png'
                alt=''
                className='w-[35rem]  '
              />
            </div>
            <div className=' flex flex-col'>
              <div className='flex justify-around  w-[73rem] mt-[6rem]  '>
                <div className='bg-white justify-between ml-[3rem] drop-shadow-xl '>
                  <img
                    src={kuda}
                    alt='barcode'
                    className='  h-[2rem] w-[2rem] mt-[1rem] mx-[2rem] '
                  />
                  <p className='mt-[2rem] text-[#40196d] mx-[2rem] font-[Mulish] '>
                    Download Kuda on Google Play or the App Store.
                  </p>
                </div>

                <div className='bg-white ml-[3rem] drop-shadow-xl'>
                  <img
                    src={Note}
                    alt='barcode'
                    className='  h-[2rem] w-[2rem] mt-[1rem]  mx-[2rem] '
                  />
                  <p className='mt-[2rem]  text-[#40196d] mx-[2rem] font-[Mulish]'>
                    Open the app and follow the prompts on your screen to open
                    an account.
                  </p>
                </div>
                <div className='bg-white ml-[3rem] drop-shadow-xl'>
                  <img
                    src={Naria}
                    alt='barcode'
                    className='   h-[2rem] w-[2rem]  mt-[1rem] mx-[2rem]'
                  />
                  <p className='mt-[2rem] text-[#40196d] mx-[2rem]  font-[Mulish]'>
                    {" "}
                    Add money to your account to get the best out of Kuda.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className='ancestor bg-white-500 mt-[8rem]'>
          <div className='grandparent  w-500 h-600 mx-auto'>
            <div className='parent  w-300 h-300 flex justify-center'>
              <div className='child1  w-100 h-100'>
                {<img src={Man} className=' w-[5rem]' alt='kuda'></img>}
              </div>
              <div className='child2 w-100 h-100 p-7'>
                <div className='text-[#614086]'>
                  <p>Features</p>
                </div>
                <div>
                  <p>Kuda Card</p>
                </div>
                <div>
                  <p>Spend</p>
                </div>
                <div>
                  <p>Save</p>
                </div>
                <div>
                  <p>Budget</p>
                </div>
                <div>
                  <p>Borrow</p>
                </div>
                <div>
                  <p>Payments & Transfers</p>
                </div>
                <div>
                  <p>Account</p>
                </div>
              </div>
              <div className='child3 w-100 h-100 p-7'>
                <div className='text-[#614086]'>
                  <p>Company</p>
                </div>
                <div>
                  <p>Blog</p>
                </div>
                <div>
                  <p>Press</p>
                </div>
                <div>
                  <p>Join Our Team</p>
                </div>
                <div>
                  <p>About Us</p>
                </div>
              </div>
              <div className='child4 w-100 h-100 p-7'>
                <div className='text-[#614086]'>
                  <p>Help</p>
                </div>
                <div>
                  <p>Get Help</p>
                </div>
                <div>
                  <p>FAQs</p>
                </div>
                <div>
                  <p>Security</p>
                </div>
                <div>
                  <p>Contact Us</p>
                </div>
              </div>
              <div className='child5 w-100 h-100 p-7'>
                <div className='text-[#614086]'>
                  <p>Transparency</p>
                </div>
                <div>
                  <p>Terms & Conditions</p>
                </div>
                <div>
                  <p>Privacy Policy</p>
                </div>
                <div>
                  <p>Information Security Policy</p>
                </div>
                <div>
                  <p>Cookie Policy</p>
                </div>
                <div>
                  <p>Complaints</p>
                </div>
              </div>
            </div>

            {/* second div section 2 (holding logos three logos and content) */}
            {/* //////////////////////////////////////////////////////////////////////// */}
            <div className=' w-200 flex justify-center p-5'>
              <div>
                {
                  <img
                    src={appstore}
                    className=' w-[6rem] rounded mx-[1rem]'
                    alt='appstore'
                  ></img>
                }
              </div>
              <div>
                {
                  <img
                    src={google}
                    className=' w-[6rem] rounded mx-[1rem]'
                    alt='google'
                  ></img>
                }
              </div>
              <div>
                {
                  <img
                    src={signin}
                    className=' w-[6rem] rounded mx-[1rem]'
                    alt='signin'
                  ></img>
                }
              </div>
            </div>
            <div className=' w-200 flex justify-center p-5 text-[#614086]'>
              <p>Products may vary by country or market.</p>
            </div>
          </div>

          {/* last div of kuda home page(containing links,logos and contents) */}
          {/* //////////////////////////////////////////////////////////////////////// */}
          <div className='parent-contact  w-300 h-300 flex justify-center'>
            <div className='child2  w-100 h-100 p-7'>
              <div className='text-[#614086]'>
                <p>Contact</p>
              </div>
              <div>
                <p>help@kuda.com</p>
              </div>
              <div className='flex p-2'>
                <div>
                  {
                    <img
                      src={twitter}
                      className=' w-[2rem] rounded mx-[1rem] '
                      alt='twitter'
                    ></img>
                  }
                </div>
                <div>
                  {
                    <img
                      src={instagram}
                      className=' w-[2rem] rounded mx-[1rem]'
                      alt='instagram'
                    ></img>
                  }
                </div>
                <div>
                  {
                    <img
                      src={facebook}
                      className=' w-[2rem] rounded mx-[1rem]'
                      alt='facebook'
                    ></img>
                  }
                </div>
                <div>
                  {
                    <img
                      src={youtube}
                      className=' w-[2rem] rounded mx-[1rem]'
                      alt='youtube'
                    ></img>
                  }
                </div>
                <div>
                  {
                    <img
                      src={mon}
                      className=' w-[2rem] rounded mx-[1rem]'
                      alt='mon'
                    ></img>
                  }
                </div>
                <div>
                  {
                    <img
                      src={link}
                      className=' w-[2rem] rounded mx-[1rem]'
                      alt='link'
                    ></img>
                  }
                </div>
              </div>
            </div>
            <div className='child3  w-100 h-100 p-7'>
              <div className='text-[#614086]'>
                <p>Lagos</p>
              </div>
              <div>
                <p>151 Herbert Macaulay Way,</p>
              </div>
              <div>
                <p>Yaba, Lagos,</p>
              </div>
              <div>
                <p>Nigeria</p>
              </div>
            </div>
            <div className='child4  w-100 h-100 p-7'>
              <div className='text-[#614086]'>
                <p>London</p>
              </div>
              <div>
                <p>5 New Street Square, London,</p>
              </div>
              <div>
                <p>England, EC4A 3TW,</p>
              </div>
              <div>
                <p>UK</p>
              </div>
            </div>
          </div>
          <div className='child5  w-100 h-100 flex justify-center'>
            <div className='text-[#bebebe]'>
              <div className=''>
                <p>
                  © 2022 Kuda Technologies Ltd (Company No.11472232). All rights
                  reserved.y
                </p>
              </div>
              <div>
                <p>
                  If you would like to find out more about which Kuda entity you
                  receive services from, please reach out to us via
                </p>
              </div>
              <div>
                <p>
                  the in-app chat in the Kuda app. Nigerian banking services
                  offered by Kuda Microfinance Bank (RC796975)
                </p>
              </div>
              <div>
                <p>
                  with registered address at 151 - Herbert Macaulay Way, Yaba,
                  Lagos, Nigeria. Kuda Microfinance Bank is
                </p>
              </div>
              <div>
                <p>
                  licensed by the Central Bank of Nigeria. Deposits are insured
                  by the Nigerian Deposit Insurance Corporation
                </p>
              </div>
              <div>
                <p>(NDIC).</p>
              </div>
              <div>
                <p>
                  UK services are offered by Kuda EMI Ltd (Company No. 13724208)
                  with registered address at 5 New Street
                </p>
              </div>
              <div>
                <p>
                  Square, London, EC4A 3TW, United Kingdom. Kuda EMI Ltd is A
                  Distributor of Modulr FS Limited. Modulr FS
                </p>
              </div>
              <div>
                <p>
                  Limited (Company No 09897919), is regulated by the Financial
                  Conduct Authority for issuance of electronic
                </p>
              </div>
              <div>
                <p>money under reference 900573.</p>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}

export default HomePage
