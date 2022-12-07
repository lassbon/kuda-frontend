import Navbar from "../Navbar/Navbar"
import nigFlag from "../../../img/nig_flag.png"
import Backarrow from "../../../img/Svg/Backarrow.svg"

function Statement() {
  return (
    <>
      <Navbar />
      <>
        <div className='flex justify-center items-center mt-[1rem]'>
          <h1 className='text-[#4b2575] font-bold text-[1.5rem]'>Statements & Reports</h1>&nbsp;
          <img src={nigFlag} alt='Nig flag' className='w-[1rem]' />
        </div>
        <div className='flex justify-center items-center mt-[1.5rem]'>
          <a href='#'>
            <button className='border border-top-bottom-left[#d8d1e1] w-[18rem] px-[1.5rem] h-[2.3rem] text-[#7d629a] font-small'>
              Statements
            </button>
          </a>
          <a href='#'>
            <button className='border-top-bottom-left[#d8d1e1] w-[18rem] px-[1.5rem] h-[2.3rem] bg-[#f9f9f9] text-[#7d629a] font-small'>
              Reports
            </button>
          </a>
        </div>
      </>
      <main className='w-[30%] mx-auto mt-[2rem] shadow-2xl'>
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
                <select id="filetype">
                  <option value="volvo">PDF</option>
                  <option value="saab">Excel</option>
                </select>
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
      </main>
    </>
  )
}

export default Statement
