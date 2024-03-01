import { useEffect, useState } from "react";
import Context from "../context/provider";
import { TCheckList } from "../context/types";
import ExportExcel from "../components/ExportExcel";
import { channels } from "../context/constants.js";
import db from "../context/db/mySql.js";
import configApp from "../context/config/index.js";

import { MainTableHeater } from "./MainTableHeater";

let ipcRenderer;
if (configApp.isDev) {
  ipcRenderer = window.require("electron").ipcRenderer;
}

export default function MainTableView() {
  const context = Context(); // const [allData, setAllData] = useState<[TDataToShow]>(context.data)
  const [dataDB, setDataDB] = useState<null | TCheckList[]>([]);
  const [jsonData, setJsonData] = useState("");
  useEffect(() => {
    if (configApp.isDev) {
      db.sendData("mera prueba");
      ipcRenderer.on(channels.GET_DATA, async (_, arg) => {
        context.calculateNextID(arg);
        setDataDB(arg);

        setJsonData(arg);
      });
      return () => {
        ipcRenderer.removeAllListeners();
      };
    } else {
      context?.calculateNextID(context.data);
      setDataDB(context.data);
      setJsonData(context.data);
    }
  }, [context?.area]);
  return (
    <section className="relative w-full h-[90%] justify-center items-center">
      <MainTableHeater data={dataDB} />
      <div className="absolute bottom-0 z-20 left-6 h-24 flex flex-row justify-center items-center gap-12 max-w-[760px] w-screen m-auto">
        <ExportExcel excelData={jsonData} />
      </div>
    </section>
  );
}
