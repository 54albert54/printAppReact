
import AreaView from "../UI/AreaView.tsx";
import {Area} from '../context/types.ts'
import FormCheck from '../components/FormCheck.jsx'
import { useEffect, useRef, useState } from "react";
import MainTitle from "../UI/MainTitle"

const DBLogin =()=>{
  const [dataBase , setDataBase ]=useState("No Data")
  const [values, setValues] = useState({
    host: "",
    user: "",
    password: "",
    database: "",
  });

  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const inputDetails = [
    { name: "host", placeholder: "Host",type:"text" },
    { name: "user", placeholder: "user",type:"password" },
    { name: "password", placeholder: "password",type:"password" },
    { name: "database", placeholder: "database",type:"password" },
  ];


  const checkAllCampos = (e) => {
   
    const userValue = e.target.name;
    const value = e.target.value;
    
    
    setValues({ ...values, [userValue]: value });
  };

  useEffect(()=>{

        // Recuperar la cadena JSON del localStorage
const objetoStringRecuperado = localStorage.getItem("DataB/V1");
// Convertir la cadena JSON de nuevo a un objeto JavaScript
const objetoRecuperado = JSON.parse(objetoStringRecuperado)

setDataBase(objetoRecuperado)

  },[])



  const handleSubmit = () => {
    const objetoString = JSON.stringify(values);
    localStorage.setItem("DataB/V1", objetoString);
    
    console.log('values',values);

  }
  const showData = ()=>{


    console.log('objetoRecuperado',dataBase);
     
  }


  return(
    <AreaView area={Area.DB_LOGIN}>
      <MainTitle title={` ${dataBase?.host?dataBase?.host:'No as agragado ninguna'}`}/>

     <section className="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <FormCheck
          formFor={"Login"}
          inputRefs={inputRefs}
          inputDetails={inputDetails}
          checkAllCampos={checkAllCampos}
          sendValues={handleSubmit}
        />

        <div className="flex items-center  justify-center">

        {/* <button
            type="reset"
            onClick={showData}
            className="inline-block shadow-xl  rounded-lg active:bg-blue-800 hover:bg-blue-700 bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            Show
          </button> */}

          <button
            type="reset"
            onClick={handleSubmit}
            className="inline-block shadow-xl  rounded-lg active:bg-blue-800 hover:bg-blue-700 bg-blue-500 px-5 py-3 text-sm font-medium text-white"
          >
            ADD 
          </button>
        </div>
      </section>
    </AreaView>
    )
};

export default DBLogin; 