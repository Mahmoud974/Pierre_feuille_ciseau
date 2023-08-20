import { Link } from "react-router-dom";
import { NumberChoose } from "../shared/types";


type Props = {
  chooseElement: any
}


const Elements = ({chooseElement}:Props) => {

/**
 * Inteligence artificiel
 */

  return (
  
       <div className="flex flex-col md:justify-center mt-14 max-w-sm md:mx-auto " id='selectOk' >
     <div className="flex md:justify-center justify-between md:space-x-16  ">
      <img src="../src/assets/bg-triangle.svg" alt="triangle" className="absolute md:w-96 mt-12 md:ml-8 w-62"/>
    <Link to='/score'>
       <div className="relative cursor-pointer rounded-full md:w-52 md:h-52 w-36 h-36 md:border-[1.5em] border-[1.2em] border-blue-500 bg-slate-100 flex items-center justify-center " onClick={()=> chooseElement(NumberChoose.Paper)} >
    <img src="../src/assets/icon-paper.svg" alt="" className="md:w-24 w-30 " />
      </div>
    </Link>
    <Link to='/score'>
     <div className="relative  cursor-pointer rounded-full md:w-52 md:h-52 w-36 h-36 md:border-[1.5em] border-[1.2em] border-yellow-500 bg-slate-100 flex items-center justify-center " onClick={()=> chooseElement(NumberChoose.Scissors)} >
    <img src="../src/assets/icon-scissors.svg" alt="" className="md:w-24 w-30" />
      </div>
    </Link>
  
     </div>
       <Link to='/score'>
       <div className="relative  cursor-pointer   rounded-full md:w-52 md:h-52 w-36 h-36 md:border-[1.5em] border-[1.2em] border-red-600 bg-slate-100 flex items-center justify-center mx-auto " onClick={()=> chooseElement(NumberChoose.Rock)} >
    <img src="../src/assets/icon-rock.svg" alt="" className="md:w-24 w-30" />
      </div>
</Link>
      </div>
  )
}


export default Elements