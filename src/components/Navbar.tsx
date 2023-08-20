
type Props = {
  count: number,

}

const Navbar = ({count}:Props) => {
    return (
          <div className="flex justify-between md:p-7 p-4 ">
     <ul className='md:text-4xl text-xl  font-bold'>
      <li>ROCK</li>
      <li>PAPER</li>
      <li>SCISSORS</li>
    </ul>

    <div className="bg-white text-gray-500 md:px-10 md:py-0 px-8 py-2 rounded-xl text-center flex justify-center  flex-col">
      <p className="text-blue-700 ">SCORE</p>
      <p className="md:text-6xl text-4xl font-bold">{count}</p>
    </div>
   </div>
    );
};

export default Navbar;