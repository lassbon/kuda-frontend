import Navbar from "./Navbar"
import Button from "./Button"
import Img from "./Img"
import kuda_circular from "../img/kuda_circular.svg"
import Ayoka from "../img/ayoka.png"
import Zulfah from "../img/zulfah.jpeg"
import Label from "./Label"
import InputField from "./InputField"
function Home() {
  return (
    <>
      <Navbar />
      <br />
      <br />
      <div className='d-flex justify-content-evenly'>
        <div className='border border-2'>
          <h2 className='h2'> The money app for Africans.</h2>
          <p> Save, spend, send and invest money across borders.</p>
          <input
            type='button'
            className='btn btn-primary rounded-pill p-2'
            value='Get kuda'
          />
        </div>
        <div className='border border-2'>otehr div</div>
        <div className='border border-2'>otehr div</div>
      </div>
    </>
  )
}

export default Home
