

const Modal = () => {
    return (
        <div className="modal ">
  <div className="modal-box bg-white">
   <div className="flex justify-between items-center ">
     <h2 className="font-bold  uppercase md:text-5xl text-3xl text-slate-500">Rules</h2>
     <div className="modal-action">
      <label htmlFor="my-modal" className="btn -mt-4 bg-white border border-none text-3xl text-slate-500">X</label>
    </div>
   </div>
     <div className=" flexflex-col justify-center mt-14 ">
   <img src="../src/assets/image-rules.svg" alt="" className="mx-auto pb-12" />
      </div>
       
  </div>
</div>
    );
};

export default Modal;