import AreaView from "../UI/AreaView.tsx";
import { Area } from "../context/types.ts";
import FormCheck from "../components/FormCheck.jsx";
import SwitchOptions from "../components/SwitchOptions.tsx";
import { useEffect, useRef, useState } from "react";
import MainTitle from "../UI/MainTitle.tsx";
import { channels } from "../context/constants.js";
import Context from "../context/provider";
import configApp from "../context/config";

// const { ipcRenderer } = window.require("electron");

let ipcRenderer;
if (configApp.isDev) {
  ipcRenderer = window.require("electron").ipcRenderer;
}

const DBLogin = () => {
  const context = Context();

  const [dataBase, setDataBase] = useState("No Data");
  const [values, setValues] = useState({
    host: "",
    user: "",
    password: "",
    database: "",
  });

  const inputRefs = [useRef(null), useRef(null), useRef(null), useRef(null)];

  const inputDetails = [
    { name: "host", placeholder: "Host", type: "text" },
    { name: "user", placeholder: "user", type: "password" },
    { name: "password", placeholder: "password", type: "password" },
    { name: "database", placeholder: "database", type: "password" },
  ];

  const checkAllCampos = (e) => {
    const userValue = e.target.name;
    const value = e.target.value;

    setValues({ ...values, [userValue]: value });
  };

  useEffect(() => {
    if (configApp.isDev) {
      ipcRenderer.send(channels.PUT_BD, {
        newDado: "a",
      });
      ipcRenderer.on(channels.PUT_BD, async (_, arg) => {
        setDataBase(arg);
      });

      // ipcRenderer.on(channels.SET_BD, async (_, arg) => {
      //   console.log("SET_BD", arg);
      //   setDataBase("SET_BD");
      // });

      // Clean the listener after the component is dismounted
      return () => {
        ipcRenderer.removeAllListeners();
      };
    }
  }, [context?.area]);

  const handleSubmit = () => {
    ipcRenderer.send(channels.SET_BD, { newDado: values });
  };

  return (
    <AreaView area={Area.DB_LOGIN}>
      <MainTitle title={"Optciones"} />
      <div className="w-full  flex flex-row ">
        {/* <section className="w-1/2 mt-6 flex flex-col items-center">
          <h2 className="text-xl font-semibold text-center ">
            Otras Opciones.
          </h2>
          <div className="w-[200px] mx-auto flex flex-col gap-4 pt-6">
            <SwitchOptions
              title={`Guardar datos ${context?.isInLocal ? " local" : "DB"}`}
              toogle={context?.setIsInLocal}
            />
          </div>
        </section> */}

        <section className="mx-auto mb-0 mt-8 max-w-md space-y-4">
          <h2 className="text-xl font-semibold text-center">
            Cambiar de Base de datos.
          </h2>
          <p className="text-center">
            DB:{` ${dataBase?.host ? dataBase?.host : "remota"}`}
          </p>
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
      </div>
    </AreaView>
  );
};

export default DBLogin;
