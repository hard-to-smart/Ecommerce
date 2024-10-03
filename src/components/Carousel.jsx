import { FaBackward } from 'react-icons/fa'
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";



const Carousel = () => {
  return (
    <div>
      <prev>
        <IoIosArrowBack/>
      </prev>
      <div>

      </div>
      <next>
        <IoIosArrowForward/>
      </next>
    </div>
  )
}

export default Carousel