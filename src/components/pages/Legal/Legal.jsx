import { useNavigate } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi"
import Container from "../Container/Container"
import flag from "../../../img/nig_flag.png"
import Accordion from './components/Accordion'

const Legal = () => {
  const redirect = useNavigate()
  return (
    <Container>
    <div className=' h-screen flex justify-center items-center'>
        <div className="container w-full max-w-[800px] bg-white drop-shadow-2xl">
        <div className="head flex items-center justify-between px-4 py-2 mb-12">
                <div className="head flex items-center gap-4 shadow-4xl" >
                     <div className="flag rounded-full bg-gray-300">
                        <img src={flag} alt="flag" className="w-12 h-12 rounded-full" />
                      
                     </div>
                    <div className="naija font-bold">Nigeria</div>
                </div>
                <div className="arrow" onClick={()=>redirect(-1)}>
                    <FiChevronRight />
                </div>
            </div>
            <div className="accordion">
            <Accordion />
            </div>
        </div>
            
    </div>
    </Container>
  )
}

export default Legal