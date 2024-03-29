import { createContext, useContext, useState } from "react";
import { pruebaCheck, referencias } from "./storage";
import { Area } from "./types";

const CheckContext = createContext({});

const users = [
  {
    userName: "dd",
    name: "---",
    role: "admin",
    detail: "Todas las vistas",
    password: "---",
    img: "---",
  },
  {
    userName: "admin",
    name: "ADMIN",
    role: "admin",
    detail: "Cosas de admin",
    password: "asdf",
    img: "https://png.pngtree.com/png-vector/20190118/ourmid/pngtree-user-vector-icon-png-image_328702.jpg",
  },
  {
    userName: "cliente",
    name: "cliente",
    role: "cliente",
    detail: "Cosas de cliente",
    password: "asdf",
    img: "https://www.speak2university.com/assets/admin/dist/img/user-avatar.png",
  },
];

export const CheckContextProvider = ({ children }) => {
  const [references, setReferences] = useState(referencias);
  const [area, setArea] = useState(Area.HOME);
  const [printArea, setPrintArea] = useState(false);
  const [isInLocal, setIsInLocal] = useState(false);
  const [auth, setAuth] = useState(users[2]);
  const [nextID, setNextID] = useState(0);
  //datos que se llenan con el form
  const [dataToShow, setDataToShow] = useState({
    centavos: "",
    monto: "",
    clientName: "",
  });
  //data a presentar en la tabla
  const [data, setData] = useState(pruebaCheck);

  const calculateNextID = (data) => {
    const onlyIds = data.reduce(
      (acu, ele) => {
        return acu > ele.checkId ? acu : ele.checkId;
      },

      0
    );

    setNextID(onlyIds + 1);
  };

  const saveDataInArchive = (newCheck) => {
    const newData = [...data, newCheck];
    setData(newData);
  };
  const login = (datoUser) => {
    let result = "";

    const user = users.find((user) => user.userName === datoUser.userName);

    if (user) {
      if (user.password == datoUser.password) {
        result = "successfulLogin";
        setAuth(user);
        setArea("Home");
      } else {
        result = "wrongPassword";
      }
    } else {
      result = "usuarioNoFounded";
    }
    return result;
    //
  };
  const logout = () => {
    setAuth(null);
    setArea("Login");
    console.log("me voy");
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
    auth,
    login,
    logout,
    nextID,
    calculateNextID,
    isInLocal,
    setIsInLocal,
  };

  return (
    <CheckContext.Provider value={values}>{children}</CheckContext.Provider>
  );
};

const MyContext = () => useContext(CheckContext);

export default MyContext;
