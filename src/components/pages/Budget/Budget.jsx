import Budget from "../../../img/Svg/Budgetlogo.svg"
import Container from "../Container/Container"
function Assignment() {
  return (
    <>
      <Container>
        <main className=''>
          <div className='mx-auto mt-[5rem] w-[53rem] bg-[#ffffff] text-center'>
            <div className='mx-auto text-[#411a6e] font-black'>
              <h1>Budget For Zulfah</h1>
            </div>
            &nbsp;&nbsp;<br></br>
            <div className='mx-auto border drop-shadow-lg bg-white'>
              <div>
                <div className='text-center bg-[#ffffff]'>
                  <h2 className='text-[#010101] font-extrabold mt-[2rem]'>
                    Budgeting for zulfah is coming soon
                  </h2>
                </div>
                &nbsp;&nbsp;<br></br>
                <div className='text-center'>
                  <h3>Rosh will let you know when it’s ready</h3>
                </div>
              </div>
              &nbsp;&nbsp;<br></br>&nbsp;&nbsp;<br></br>
              <div className='flex gap x-30 justify-center h-56'>
                <img
                  src={Budget}
                  className=' h-56  drop-shadow-lg outline-none'
                  alt='Budget Pie Chat'
                />
              </div>
            </div>
          </div>
        </main>
      </Container>
    </>
  )
}

export default Assignment
