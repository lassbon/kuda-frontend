import Navbar from "../Navbar/Navbar"
import nigFlag from "../../../img/nig_flag.png"
import reportChart from "../../../img/Svg/ReportChart.svg"

function Report() {
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
            <button className='border-top-bottom-left[#d8d1e1] w-[18rem] px-[1.5rem] h-[2.3rem] bg-[#f9f9f9] text-[#7d629a] font-small'>
              Statements
            </button>
          </a>
          <a href='#'>
          <button className='border border-top-bottom-left[#d8d1e1] w-[18rem] px-[1.5rem] h-[2.3rem] text-[#7d629a] font-small'>
              Reports
            </button>
          </a>
        </div>
      </>
      <main className='w-[30%] mx-auto mt-[2rem] shadow-xl'>
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
      </main>
    </>
  )
}

export default Report
