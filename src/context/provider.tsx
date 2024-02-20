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

type TContext = {
  references: [TReference];
  saveReferences: (e) => void;
  eraseReferences: () => void;
  area:string
  setArea:(a)=>void
  dataToShow:TRealvalues
   setDataToShow:(e)=>void
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
    area, setArea
  };

  return (
    <CheckContext.Provider value={values}>{children}</CheckContext.Provider>
  );
};

const Context = () => useContext(CheckContext);

export default Context;
