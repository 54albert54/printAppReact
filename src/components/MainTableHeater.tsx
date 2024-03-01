import CellViews from "./CellViews";

export function MainTableHeater({ data }) {
  return (
    <section className="border-black border rounded-md overflow-auto p-[1px] bg-gray-400  ">
      <ul className="  w-full flex flex-row justify-between  border shadow-sm font-semibold text-sm bg-white py-1 pl-6 ">
        <li className="w-[50px] ">{"^"}</li>
        <li className="w-[60px] ">ID</li>
        <li className="w-[125px] ">Fecha</li>
        <li className="w-[150px]  ">Nombre</li>
        <li className="w-[120px] relative left-4 ">
          <p>Monto</p>
        </li>
        <li className="w-[100px] flex relative right-1  justify-end  ">
          Activo
        </li>
        <li className="w-[360px] pl-6 ">Motivo</li>
      </ul>
      <div className=" overflow-y-scroll overflow-x-hidden h-[69vh] border-t-2 border-gray-500 scroll-smooth ">
        {data?.map((data, i) => (
          <CellViews key={i} element={data} idx={i} />
        ))}
      </div>
    </section>
  );
}
