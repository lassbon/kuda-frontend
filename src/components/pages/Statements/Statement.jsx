import Navbar from "../Navbar/Navbar"
import nigFlag from "../../../img/nig_flag.png"
import Backarrow from "../../../img/Svg/Backarrow.svg"
import reportChart from "../../../img/Svg/ReportChart.svg"
import { useState } from "react"

function Statement() {
  const [isOpen, setIsOpen] = useState(true)

  return (
    <>
      <Navbar />
      <>
        <div className='flex justify-center items-center mt-[1rem]'>
          <h1 className='text-[#4b2575] font-bold text-[1.5rem]'>Statements & Reports</h1>&nbsp;
          <img src={nigFlag} alt='Nig flag' className='w-[1rem]' />
        </div>
        <div className='flex justify-center items-center mt-[1.5rem]'>
          <button 
            type="button"
            className={isOpen ? 'border border-top-bottom-left[#d8d1e1] w-[18rem] px-[1.5rem] h-[2.3rem] text-[#7d629a] font-small'
            : 'border-top-bottom-left[#d8d1e1] w-[18rem] px-[1.5rem] h-[2.3rem] bg-[#f9f9f9] text-[#7d629a] font-small'}
            onClick={() => setIsOpen(isOpen = true)}>Statements</button>
          <button
            type="button"
            className={isOpen ? 'border-top-bottom-left[#d8d1e1] w-[18rem] px-[1.5rem] h-[2.3rem] bg-[#f9f9f9] text-[#7d629a] font-small'
            : 'border border-top-bottom-left[#d8d1e1] w-[18rem] px-[1.5rem] h-[2.3rem] text-[#7d629a] font-small' }
            onClick={() => setIsOpen(isOpen = false)}>Reports</button>
        </div>
      </>
      <main className='w-[30%] mx-auto mt-[2rem] shadow-2xl'>
      {isOpen ?  
        <div className='flex flex-col justify-center border rounded drop-shadow-2xl'>
          <div className='flex items-center mx-[1rem] mt-[1rem] w-[10vh]'>
            <img
              src={Backarrow}
              alt='backarrow'
              className='w-[1rem] h-[1rem]'
            ></img>
            <p className='flex items-center text-[#40196d]'>Back</p>
          </div>
          <div className='flex flex-col items-center'>
            <h2 className='py-1 text-[#010101] font-bold text-xl text-center'>
              Get Statement
            </h2>
            <p className='text-sm text-center'>
              Choose a timeframe for your statement.
            </p>
            <form className='mx-[3rem] mt-[1rem] my-8 flex flex-col items-center w-fill'>
              <div className='items-center w-[21rem]'>
                <label htmlFor='' className='text-sm'>
                  Start Date
                </label>
                <br />
                <input
                  type='date'
                  id='startdate'
                  className='rounded w-[21rem] h-[2.4rem] my-2 p-2'
                  placeholder='Set a date to begin'
                  required
                />
              </div>
              <div className='items-center w-[21rem]'>
                <label htmlFor='' className='text-sm'>
                  End Date
                </label>
                <br />
                <input
                  type='date'
                  id='enddate'
                  className='rounded w-[21rem] h-[2.4rem] my-2 p-2'
                  placeholder='Set a date to end'
                  required
                />
              </div>
              <div className='items-center w-[21rem]'>
                <label htmlFor='filetype' className='text-sm'>
                  File Type
                </label>
                <br />
                <div className='flex gap-x-8 justify-between'>
                  <div className="border w-[9rem] h-[2.4rem] my-2 p-2 mx-auto drop-shadow-md">
                    <input type="radio" id="html" name="fav_language" value="HTML" />
                    <label htmlFor="html" className="p-4 mx-auto">PDF</label>
                  </div>
                  <div className="border w-[9rem] h-[2.4rem] my-2 p-2 mx-auto drop-shadow-md">
                    <input type="radio" id="css" name="fav_language" value="CSS" />
                    <label htmlFor="css" className="p-4 mx-auto">Excel</label>
                  </div>
                </div>
              </div>
              <button
                type='submit'
                className='bg-[#40196d] w-[10rem] mt-[2rem] p-2 rounded-lg text-white text-sm'
              >
                Get
              </button>
            </form>
          </div>
        </div>
        :
        <div className='flex flex-col justify-center border rounded drop-shadow-2xl'>
          <div className='flex flex-col items-center mx-[1rem] mt-[1rem]'>
            <h2 className='py-1 text-[#010101] font-bold text-xl text-center'>
              Spending Reports
            </h2>
            <div className="px-[2rem] p-[1rem]">
              <img src={reportChart} alt='addMoney' className='w-[3rem]' />
            </div>
            <p className='text-sm py-1 text-[#010101] font-bold text-center'>
              Spending Reports are coming soon
            </p>
            <p className='text-sm text-[#B6B6B4] text-center'>
              We'll let you know when they're ready
            </p>
            <br /><br /><br />
          </div>
        </div>
      }
      </main>
    </>
  )
}

export default Statement
