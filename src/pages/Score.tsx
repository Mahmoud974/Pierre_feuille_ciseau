import { useEffect, useState } from "react";
import { ChooseElement} from "../shared/types";
import { Link } from "react-router-dom";

type Props = {
  chooseNumber: number | undefined | any,
    count: number,
setCount: any
}


const Score = ({chooseNumber,count,setCount}:Props) => {

const [colorChoose,setColorChoose] = useState<string>('');
const [imgChoose,setImgChoose] = useState<string>('');
const [colorHomeChoose,setColorHomeChoose] = useState<string>('');
const [imgHomeChoose,setImgHomeChoose] = useState<string>('');
const [result, setResult] = useState('YOU WIN')


const choices: ChooseElement[] = [  
  {id:1, color: 'border-[1.5em] border-red-600', img: 'rock'},  
  {id:2, color: 'border-[1.5em] border-blue-500', img: 'paper'}, 
  {id:3, color: 'border-[1.5em] border-yellow-500', img: 'scissors'}
];



const getRandomChoice = () => choices[Math.floor(Math.random() * choices.length )]
useEffect(()=>{
 const chosen:ChooseElement = choices[chooseNumber - 1];

if (chosen) {
  setColorChoose(chosen.color);
  setImgChoose(chosen.img);

  const home = getRandomChoice();
  setColorHomeChoose(home.color);
  setImgHomeChoose(home.img);

  if (chosen.id === home.id) {
    setResult('ÉGALITÉ');
  }
  else if((chosen.id === 3 && home.id === 1) || 
    (chosen.id === 1 && home.id === 3)){
setResult('YOU LOSE');
    }
   else if (chosen.id > home.id) {
    setResult('YOU WIN');
    setCount(count + 1)

  } 
  else {
    setResult('YOU LOSE');
  }
}
},[]);

 
  
    return (
    <div className="flex justify-evenly px-12 mt-16 space-x-12 ">
      <div className="text-center  ">
        <p className="py-12 font-bold text-2xl">YOU PICKED</p>
     <div className={`${colorChoose} rounded-full w-52 h-52   bg-slate-200 flex items-center justify-center  `}  >
    <img src={`../src/assets/icon-${imgChoose}.svg `} alt="" className="w-24" />
      </div>
    
        </div>
        <div>
      <h1 className="text-4xl text-center font-bold mt-32 letter-spacing" >
        {result}
      </h1>
      
      <Link to='http://localhost:5173/'>
       <button className="whitespace-nowrap text-red-600 tracking-widest bg-white px-12 mx-auto py-2 rounded-md w-full mt-4 font-bold text-1xl"  >
        PLAY AGAIN
      </button>
      </Link>
     
    </div>
   <div className="text-center ">
    <p className="py-12 font-bold text-2xl">THE HOUSE PICKED</p>

      <div className={`${colorHomeChoose} rounded-full w-52 h-52   bg-slate-200 border-slate-300 flex items-center justify-center  `}  >
    <img src={`../src/assets/icon-${imgHomeChoose}.svg `} alt="" className="w-24" />
      </div>


</div>
        
    </div>
    );
};



export default Score;