import { useEffect, useState } from "react";
import { ChooseElement, NumberChoose } from "../shared/types";
import { Link } from "react-router-dom";

type Props = {
  chooseNumber: number | undefined | any
}


const Score = ({chooseNumber}:Props) => {

  const [colorChoose,setColorChoose] = useState<string>('');
const [imgChoose,setImgChoose] = useState<string>('');
const [colorHomeChoose,setColorHomeChoose] = useState<string>('');
const [imgHomeChoose,setImgHomeChoose] = useState<string>('');
const [result, setResult] = useState('YOU WIN')
const choices: ChooseElement[] = [  
  {id:1,color: 'border-[1.5em] border-red-600', img: 'rock'},  
  {id:2,color: 'border-[1.5em] border-blue-500', img: 'paper'}, 
   {id:3,color: 'border-[1.5em] border-yellow-500', img: 'scissors'}
];
/**
 * 
 * @returns Ai play
 */
const getRandomChoice = () => choices[Math.floor(Math.random() * choices.length)];
 
useEffect(()=>{
  const chosen = choices[chooseNumber - 1];

  // if(NumberChoose.Rock=== chosen.id){
  //   df
  // }


  if(chosen){
    setColorChoose(chosen.color);
    setImgChoose(chosen.img);
  } else {
   
    
    // alert('error');
  }

  const home = getRandomChoice();
  setColorHomeChoose(home.color);
  setImgHomeChoose(home.img);

 let option:string | number = '';
if (chosen.id === home.id) {
  option = chosen.id;
}

switch (option) {
  case NumberChoose.Rock:
    setResult('ÉGALITÉ');
  break;
  case NumberChoose.Paper:
    setResult('ÉGALITÉ');
  break;
  case NumberChoose.Scissors:
    setResult('ÉGALITÉ');
    break;
}

if(chosen.id > home.id){
  setResult('YOU WIN')

}
else if(chosen.id < home.id){
    setResult('YOU LOSE')
}





console.log(NumberChoose.Rock === chosen.id && NumberChoose.Rock === home.id);




},[ ]);

 
  
    return (
    <div className="flex justify-evenly px-12 mt-16 ">

            <div className="text-center  ">
                <p className="py-12 font-bold text-2xl">YOU PICKED</p>
     <div className={`${colorChoose} rounded-full w-52 h-52   bg-zinc-900 flex items-center justify-center  `}  >
    <img src={`../src/assets/icon-${imgChoose}.svg `} alt="" className="w-24" />
      </div>
    
        </div>
        <div>
      <h1 className="text-5xl font-bold mt-32" >
        {result}
      </h1>
      
      <Link to='http://localhost:5173/'>
       <button className="text-red-800 bg-white px-12 py-2 rounded-md w-full mt-4 font-bold"  >
        PLAY AGAIN
      </button>
      </Link>
     
    </div>
   <div className="text-center ">
    <p className="py-12 font-bold text-2xl">THE HOUSE PICKED</p>

      <div className={`${colorHomeChoose} rounded-full w-52 h-52   bg-zinc-900 flex items-center justify-center  `}  >
    <img src={`../src/assets/icon-${imgHomeChoose}.svg `} alt="" className="w-24" />
      </div>

      {/* <div className=" rounded-full w-52 h-52   bg-zinc-900 flex items-center justify-center " >

      </div> */}
</div>
        
    </div>
    );
};
console.log(window.location.href.includes('http://localhost:5173/'));


export default Score;