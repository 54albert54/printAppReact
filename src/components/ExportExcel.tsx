import * as XLSX from "xlsx/xlsx.mjs";
import IconButton from "../UI/IconButton";
import { setFechaColilla } from "../context/utils";

export default function ExportExcel({ excelData }) {
  const exportToExcel = async () => {
    const fileType =
      "application/vnd.opemxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = `reporte${setFechaColilla()}.xlsx`;
    const ws = XLSX.utils.json_to_sheet(excelData);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffet = XLSX.write(wb, { bookType: "xlsx", type: "array" });

    const blob = new Blob([excelBuffet], { type: fileType });

    const url = window.URL.createObjectURL(blob);

    // Crear un enlace <a> para descargar el archivo
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", fileExtension); // Nombre del archivo

    // Simular un clic en el enlace para iniciar la descarga
    link.click();
  };

  return (
    <section>
      {/* <a download={dataD} href=""></a> */}
      <IconButton action={() => exportToExcel()} title={"Excel"} />
    </section>
  );
}
