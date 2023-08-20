
import Modal from "./components/Modal"
import Navbar from "./components/Navbar";

import Elements from "./pages/Elements";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Score from "./pages/Score";
import { useState } from "react";
import { NumberChoose } from "./shared/types";



const App = () => {
  const [chooseNumber,setChooseNumber] = useState<number | undefined>()

  const chooseElement = (choose: number) =>{

switch (Math.ceil(Math.random()) * choose){
  case 1:
  setChooseNumber(Number(NumberChoose.Rock))
    console.log('Rock');
    break;
    case 2:
      setChooseNumber(Number(NumberChoose.Paper))
    console.log('paper');
   break; 
  case 3:
    setChooseNumber(Number(NumberChoose.Scissors))
    console.log('the ciseau');
   break; 
}
}

  return (
    <main className="max-w-xl md:mx-auto pt-12 mx-4">
      <div className="container mx-auto border-4 border-slate-700 rounded-2xl ">
 <Navbar/>
      </div>

<BrowserRouter>
<Routes>
  <Route path='/' element={<Elements chooseElement={chooseElement} />} />
  <Route path='/score' element={ <Score chooseNumber={chooseNumber}/>} />
</Routes>
</BrowserRouter>


<div className="flex md:justify-end justify-center md:mt-6 mt-24 xl:pb-12">
  <label htmlFor="my-modal" className="btn border border-slate-300 px-8 py-2 rounded-xl bg-blue-950 "> RULES</label>
{/* MODAL ACTIVE*/}
  <input type="checkbox" id="my-modal" className="modal-toggle" />
<Modal/>
</div>
    </main>
  )
}

export default App

