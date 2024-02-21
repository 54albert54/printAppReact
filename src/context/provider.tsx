import { createContext, useContext, useState } from "react";
import { referencias } from "./storage";

interface TReference {
  name: string;
  Left: string;
  Top: string;
}
interface TRealvalues {
  centavos: string;
  monto: string;
  clientName:string;
}
export interface TDataToShow{
  Fecha:string
  FechaColilla:string
  CantidadColilla:string
  NombreCliente:string
  ID:number,
  motivo:string
  Cantidad:string 
  DetalleCantidad: 'mas letras de los numeros'

}
const pruebaCheck:TDataToShow = {
  Fecha:'12/12/2900' ,
  FechaColilla:'12/12/2900',
  CantidadColilla:'123.00',
  NombreCliente: 'Jon Carter' ,
  ID:1000,
  motivo:"mensale para probar esto de preba" ,
  Cantidad:'123.00' ,
 
  DetalleCantidad: 'mas letras de los numeros'
};

type TContext = {
  references: [TReference];
  saveReferences: (e) => void;
  eraseReferences: () => void;
  area:string
  setArea:(a)=>void
  dataToShow:TRealvalues
   setDataToShow:(e)=>void
<<<<<<< HEAD
   data:[]
=======
   data:TDataToShow[]
>>>>>>> 0057fd9 (some changes)
   saveDataInArchive:(e)=>void
};

const CheckContext = createContext<TContext | null>(null);

export const CheckContextProvider = ({ children }) => {
  const [references, setReferences] = useState(referencias);
  const [area, setArea] = useState('Home');
  const [dataToShow , setDataToShow] = useState<TRealvalues>({
    centavos: "",
    monto: "",
    clientName: "",
  })
<<<<<<< HEAD
  const [data ,setData] = useState([])
=======
  const [data ,setData] = useState<TDataToShow[]>([pruebaCheck])
>>>>>>> 0057fd9 (some changes)

  const saveDataInArchive =(newCheck)=>{
    const newData = [...data,newCheck]
    setData(newData)
  }

  const saveReferences = (newReferences) => {
    setReferences(newReferences);

    const objetoString = JSON.stringify(newReferences);
    localStorage.setItem("check/V1", objetoString);
  };
  const eraseReferences = () => {
    localStorage.removeItem("check/V1");
  };
  const values = {
    dataToShow,
    setDataToShow,
    references,
    saveReferences,
    eraseReferences,
    area, setArea, data , saveDataInArchive
  };

  return (
    <CheckContext.Provider value={values}>{children}</CheckContext.Provider>
  );
};

const Context = () => useContext(CheckContext);

export default Context;
