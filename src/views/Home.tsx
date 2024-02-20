import Context from "../context/provider";

const Home =()=>{
  const context = Context();

  return(
    <main className={` ${
      context?.area == "Home" ? " " : " hidden"
    } relative bg-white w-[860px] h-[720px] shadow-xl m-auto flex flex-col  justify-between px-12 pt-6`}>
      <h2 className="itemsToDisappear w-full text-center font-bold pb-20 text-xl text-indigo-600" >Estas en Home</h2>


    </main>
    )
};

export default Home; 