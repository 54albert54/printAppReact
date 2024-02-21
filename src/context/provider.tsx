import { createContext, useContext, useState } from "react";
import { referencias } from "./storage";
import { TDataToShow, TRealvalues, TReference } from "./types";

type TContext = {
  references: [TReference];
  saveReferences: (e) => void;
  eraseReferences: () => void;
  area:string
  setArea:(a)=>void
  dataToShow:TRealvalues[]
   setDataToShow:(e)=>void

   data:TDataToShow[]

   saveDataInArchive:(e)=>void
   printArea:boolean
  setPrintArea:(e:boolean)=>void
};

const pruebaCheck:TDataToShow[] = [{
  Fecha:'12/12/2024' ,
  FechaColilla:'12/12/2900',
  CantidadColilla:'123.00',
  NombreCliente: 'Jon Carter' ,
  ID:1000,
  motivo:"mensale para probar esto de preba" ,
  Cantidad:'23.00' ,
  active:false,
  DetalleCantidad: 'mas letras de los numeros'
},
{
  Fecha:'12/12/2024' ,
  FechaColilla:'12/12/2900',
  CantidadColilla:'123.00',
  NombreCliente: 'Ana maria ' ,
  ID:1020,
  motivo:"mensale para probar esto de preba" ,
  Cantidad:'123.00' ,
  active:false,
  DetalleCantidad: 'mas letras de los numeros'
},
{
  Fecha:'11/12/2024' ,
  FechaColilla:'11/12/2900',
  CantidadColilla:'123.00',
  NombreCliente: 'Mike maria ' ,
  ID:1035,
  motivo:"mensale para probar esto de preba" ,
  Cantidad:'99.00' ,
  active:true,
  DetalleCantidad: 'mas letras de los numeros'
},{
Fecha:'11/12/2024' ,
FechaColilla:'11/12/2900',
CantidadColilla:'123.00',
NombreCliente: 'mario castas' ,
ID:1033,
motivo:"mensale para probar esto de preba" ,
Cantidad:'499.00' ,
active:true,
DetalleCantidad: 'mas letras de los numeros'
},{
  Fecha:'11/12/2024' ,
  FechaColilla:'11/12/2900',
  CantidadColilla:'123.00',
  NombreCliente: 'josefa' ,
  ID:1033,
  motivo:"mensale para probar esto de preba" ,
  Cantidad:'49.00' ,
  active:true,
  DetalleCantidad: 'mas letras de los numeros'
  },
]





const CheckContext = createContext<TContext | null>(null);

export const CheckContextProvider = ({ children }) => {
  const [references, setReferences] = useState(referencias);
  const [area, setArea] = useState('Home');
  const [printArea, setPrintArea] = useState(false)
  const [dataToShow , setDataToShow] = useState<TRealvalues>({
    centavos: "",
    monto: "",
    clientName: "",
  })
  const [data ,setData] = useState<TDataToShow[]>(pruebaCheck )




  

  const saveDataInArchive =(newCheck)=>{
    const newData = [...data,newCheck]
    setData(newData)
  
    console.log(newCheck)
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
    area, setArea, data , saveDataInArchive,
    printArea, setPrintArea
  };

  return (
    <CheckContext.Provider value={values}>{children}</CheckContext.Provider>
  );
};

const Context = () => useContext(CheckContext);

export default Context;
