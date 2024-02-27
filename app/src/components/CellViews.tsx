import { TCheckList } from "../context/types";




interface Props {
  element:TCheckList
  idx:number
}

const CellViews = ({element, idx}:Props) => {
  return (
    <ul className={`${idx  % 2 == 0 ? "bg-slate-100": "bg-blue-100"} hover:bg-slate-300 hover:cursor-pointer w-full flex flex-row justify-between  border shadow-sm font-light text-gray-500  text-sm  py-1 pl-6`}  >
      <li className="w-[50px] ">{idx +1}</li>
      <li className="w-[60px] ">{element.checkId}</li>
      <li className="w-[125px] ">{element.dateCreated}</li>
      <li className="w-[170px] max-w-[205px] overflow-hidden text-start truncate">{element.clientName}</li>
      <li className="w-[120px] max-w-[110px] overflow-hidden  pr-8 ">{element.amount}</li>
      <li className="w-[100px] flex  justify-start">{element.isActive ? <p className="bg-green-500 w-12 font-normal rounded-lg px-2 text-white text-[12px]">activo</p>:<p className="bg-red-500 w-12 font-normal rounded-lg pl-1 text-white text-[12px]">cancel</p>}</li>




      <li className="w-[280px] mr-10 max-w-xs overflow-hidden hover:overflow-visible transition duration-500 ease-out hover:ease-in  relative z-0 group ">
        <p className="truncate w-[180px] z-0 group-hover:hidden ">{element.reason}</p>
      <p className={`absolute  w-[325px]   z-30 top-0 hidden group-hover:block hover:bg-slate-300`}    >{element.reason}</p>
      </li>
      
    </ul>
  );
};

export default CellViews;
