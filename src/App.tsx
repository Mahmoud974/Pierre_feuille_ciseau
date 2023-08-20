
import Modal from "./components/Modal"
import Navbar from "./components/Navbar";
import Elements from "./pages/Elements";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Score from "./pages/Score";
import { useState } from "react";
import { NumberChoose } from "./shared/types";



const App = () => {
  const [chooseNumber,setChooseNumber] = useState<number | undefined>()
  const [count, setCount] = useState<number>(0)

  const chooseElement = (choosed: number) =>{

    switch (Math.ceil(Math.random()) * choosed){
    case 1:
    setChooseNumber(Number(NumberChoose.Rock))
    break;
    case 2:
    setChooseNumber(Number(NumberChoose.Paper))
    break; 
    case 3:
    setChooseNumber(Number(NumberChoose.Scissors))
    break; 
}
}

  return (
  <main className="max-w-3xl md:mx-auto pt-12 mx-4">
      <div className="container mx-auto border-4 border-slate-700 rounded-2xl ">
 <Navbar count={count}  />
      </div>

<BrowserRouter>
<Routes>
  <Route path='/' element={<Elements chooseElement={chooseElement}/>} />
  <Route path='/score' element={ <Score chooseNumber={chooseNumber}  count={count} setCount={setCount}/>} />
</Routes>
</BrowserRouter>


<div className="flex md:justify-end xl:justify-end md:mt-6  w-full   xl:pb-12 ">
  <label htmlFor="my-modal" className="btn border border-slate-300 px-8 py-2 rounded-xl bg-blue-950 "> RULES</label>
{/* MODAL ACTIVE*/}
  <input type="checkbox" id="my-modal" className="modal-toggle w-full p-4 bg-gray-200" />
<Modal/>
</div>
    </main>
  )
}

export default App

