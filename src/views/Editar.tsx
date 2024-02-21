import imagenMuestra from "../../public/access/BanReservasBlank.jpeg";

import ActionsButons from "../components/AcrionsButons";
import InfoReferencias from "../components/InfoReferencias";
import Context from "../context/provider";
import { referencias } from "../context/storage";

const EditCheck = () => {
  const context = Context();

  const saveAllData = () => {
    context?.saveReferences(referencias);
    context?.setArea("Home")
    context?.setArea("Home")
  };
  const eraserAllData = () => {
    context?.eraseReferences();
    context?.setArea("Home")
    context?.setArea("Home")
  };
  // const printCheck = ()=>{
  //     window.print()
  // };
  

  return (
    <main
      className={` ${
        context?.area == "Editar"? "z-20" : "z-0 hidden"
      }  relative  bg-backGround w-[860px] h-[520px] shadow-xl m-auto flex flex-col  justify-between px-12 pt-6`}
    >
      <div className="absolute top-4 left-0  w-full flex justify-center">
        <h2 className="itemsToDisappear w-full text-center font-bold text-xl text-indigo-600">
          Mueve las referencias.
        </h2>
      </div>
      {/* <div className="  absolute top-0 left-0 z-30 bg-black h-full w-full"> </div> */}
      <div className=" flex flex-row gap-1 z-50  relative  top-12">
        {context?.references.map((ref, ind) => (
          <InfoReferencias key={ref.name + ind} ind={ind} element={ref} />
        ))}
      </div>

      <img
        className="mt-20 absolute  z-40 w-[720px] h-[320px]"
        className="mt-20 absolute  z-40 w-[720px] h-[320px]"
        id="imgMuestra"
        src={imagenMuestra}
        alt="hola"
      />
      {/* <InputSeccion /> */}

      <ActionsButons eraserAllData={eraserAllData} saveAllData={saveAllData}  />
 
    </main>
  );
};

export default EditCheck;


