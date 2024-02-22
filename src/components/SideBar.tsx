import Options from "../UI/Options";
import PerfilPreview from "../UI/PerfilPreview";
import Context from "../context/provider";
import AjustesOptions from "./AjustesOptions";

const SideBar = () => {
  const context = Context();

  const mainOptions = [
    {
      title:'Home',
    },
    {
      title:'Llenar',
    },
    {
      title:'Pedientes',
    },
  ]

  const moreOptions = [
    {
      title:'Editar',
    }
  ]

  return (
    <section className={` ${
      context?.area != "PrintArea" ? " " : "hidden"
    }`}>
      <section className="flex relative h-[520px]  w-[320px]  z-30 shadow-xl  flex-col justify-between border-e bg-white">
        <div className="px-4 py-6">
          <span className="grid h-10 w-32 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
            Logo
          </span>

          <ul className="mt-6 space-y-1">
              {
                mainOptions.map((option )=>(
                  <Options key={option.title}  title={option.title}/>
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
