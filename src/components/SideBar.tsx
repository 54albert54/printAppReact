import { useEffect, useState } from "react";
import Options from "../UI/Options";
import PerfilPreview from "../UI/PerfilPreview";
import useContext from "../context/provider";
import AjustesOptions from "./AjustesOptions";

const SideBar = () => {
  const context = useContext();
  const [isVisible , setIsVisible ] = useState(false)


  useEffect(()=>{

      
      
    context.area != "PrintArea" && context.area != "Login" ? setIsVisible(true) : setIsVisible(false)
    
  },[context.area])

  const mainOptions = [
    {
      title:'Home',
      access:['admin','cliente']
    },
    {
      title:'Llenar',
      access:['admin','cliente']
    },
    {
      title:'Pedientes',
      access:['admin']
    },
    {
      title:'Default',
      access:['admin']
    },
  ]


  const moreOptions = [
    {
      title:'Editar',
      access:['admin','cliente']
    },
    {
      title:'PrintArea',
      access:['admin']
    },
    {
      title:'Login',
      access:['admin']
    },
  ]
  
  
  return (
    <section className={` ${
      isVisible? " " : "hidden"
    }`}>
      <section className="flex relative min-h-[520px] h-[80%]  w-[320px]  z-30 shadow-xl  flex-col justify-between border-e bg-white">
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
