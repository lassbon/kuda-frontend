import Navbar from "../Navbar/Navbar"
import nigFlag from "../../../img/nig_flag.png"

function Statement() {
  return (
    <>
      <Navbar />
      <>
          <div className='flex justify-center items-center mt-[1rem]'>
            <h1 className='text-[#4b2575] font-bold text-[1.5rem]'>Statements & Reports</h1>
            <img src={nigFlag} alt='Nig flag' className='w-[1rem]' />
          </div>
          <div className='flex justify-center items-center mt-[1.5rem]'>
            <a href='#'>
              <button className='border border-[#d8d1e1] w-[18rem] px-[1.5rem] h-[2.3rem] bg-[#f9f9f9] text-[#7d629a] font-small'>
                Statements
              </button>
            </a>
            <a href='#'>
              <button className='border border-[#d8d1e1] w-[18rem] px-[1.5rem] h-[2.3rem] bg-[#f9f9f9] text-[#7d629a] font-small'>
                Reports
              </button>
            </a>
          </div>
        </>
      <main className='w-[30%] mx-auto mt-[2rem] bg-white'>
        <div className='flex flex-col justify-center border rounded drop-shadow-2xl bg-white'>
          
        </div>
      </main>
    </>
  )
}

export default Statement
