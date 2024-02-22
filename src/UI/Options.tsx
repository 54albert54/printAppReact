import Context from "../context/provider.jsx"

const Options =({title })=>{
  const context = Context()
  
  

  return(
    <li>
    <button
      onClick={()=>context?.setArea(title)}
      className={`flex w-full ${
        context?.area == title ? "bg-gray-200 " : ""
      }  justify-start rounded-lg hover:bg-gray-200 px-4 py-2 text-sm font-medium text-gray-700`}
    >
      {title}
    </button>
  </li>
    )
};

export default Options; 