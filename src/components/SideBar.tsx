import { useEffect, useState } from "react";
import Options from "../UI/Options";
import PerfilPreview from "../UI/PerfilPreview";
import useContext from "../context/provider";
import AjustesOptions from "./AjustesOptions";
import {Area} from '../context/types.ts'

const SideBar = () => {
  const context = useContext();
  const [isVisible , setIsVisible ] = useState(false)


  useEffect(()=>{

      
      
    context.area != Area.PRINT_AREA && context.area != Area.LOGIN ? setIsVisible(true) : setIsVisible(false)
    
  },[context.area])

  const mainOptions = [
    {
      title:Area.HOME,
      access:['admin','cliente']
    },
    {
      title:Area.LLENAR,
      access:['admin','cliente']
    },
    // {
    //   title:Area.PENDIENTE,
    //   access:['admin']
    // },
    // {
    //   title:Area.DEFAULT,
    //   access:['admin']
    // },
  ]


  const moreOptions = [
    {
      title:Area.EDITAR,
      access:['admin','cliente']
    },
    // {
    //   title:Area.PRINT_AREA,
    //   access:['admin']
    // },
    // {
    //   title:Area.LOGIN,
    //   access:['admin']
    // },
    {
      title:Area.DB_LOGIN,
      access:['admin']
    },
  ]
  
  
  return (
    <section className={` ${
      isVisible? " " : "hidden"
    }`}>
      <section className="flex relative min-h-[520px] h-full  w-[320px]  z-30 shadow-xl  flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
            Logo
          </span>

          <ul className="mt-6 space-y-1">
              {
                mainOptions.map((option )=>(
                  option.access.includes(context?.auth?.role) && <Options key={option.title}  title={option.title}/>
                ))
              }
            <li>
            <AjustesOptions moreOptions={moreOptions} />
            </li>
          </ul>
        </div>

        <PerfilPreview/>
      </section>
    </section>
  );
};

export default SideBar;
