import { createContext, useContext, useState } from "react";
import { pruebaCheck, referencias } from "./storage";






const CheckContext = createContext({})

export const CheckContextProvider = ({ children }) => {
  const [references, setReferences] = useState(referencias);
  const [area, setArea] = useState("Home");
  const [printArea, setPrintArea] = useState(false);
  const [dataToShow, setDataToShow] = useState({
    centavos: "",
    monto: "",
    clientName: "",
  });
  const [data, setData] = useState(pruebaCheck);

  const saveDataInArchive = (newCheck) => {
    const newData = [...data, newCheck];
    setData(newData);

  };

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
    area,
    setArea,
    data,
    saveDataInArchive,
    printArea,
    setPrintArea,
  };

  return (
    <CheckContext.Provider value={values}>{children}</CheckContext.Provider>
  );
};

const Context = () => useContext(CheckContext);

export default Context;
