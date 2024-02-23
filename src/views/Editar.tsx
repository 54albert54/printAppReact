

import AreaView from "../UI/AreaView";
import MainTitle from "../UI/MainTitle";
import ActionsButtons from "../components/AcrionsButtons";
import InfoReferencias from "../components/InfoReferencias";
import ShowImgBlank from "../components/ShowImgBlank";
import useContext from "../context/provider";
import { referencias } from "../context/storage";

const EditCheck = () => {
  const context = useContext();

  const saveAllData = () => {
    context?.saveReferences(referencias);
    context?.setArea("Home")
  };
  const eraserAllData = () => {
    context?.eraseReferences();
    context?.setArea("Home")
  };


  return (
    <AreaView area={"Editar"}>
  
      <div className="absolute top-4 left-0  w-full flex justify-center">
      <MainTitle title={'Editar posiciones'}/>
      </div>

      <div className=" flex flex-row gap-1 z-50  relative  top-12">
        {context?.references?.map((ref, ind) => (
          <InfoReferencias key={ref.name + ind} ind={ind} element={ref} />
        ))}
      </div>

      <section className=" mt-20 absolute ">
      <ShowImgBlank/>
      </section>

      


      <ActionsButtons eraserAllData={eraserAllData} saveAllData={saveAllData}  />
 
      </AreaView>
  );
};

export default EditCheck;


