

const InputComponent = ({inputDetails,index ,checkAllCampos ,inputRef ,handleKeyDown}) => {
  


  return (
    <label className="relative w-full h-12 py-2 pl-3 block rounded-md border bg-[#f3f4f6] border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600">
   
    <input
      
      type="text"
      name={inputDetails[index].name}
      placeholder={inputDetails[index].placeholder}
      onChange={checkAllCampos}
      onKeyDown={(event) => handleKeyDown(event, index)}
      ref={inputRef}
      className="peer w-full border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 bg-[#f3f4f6]"
 
    />
      <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-[#f3f4f6] rounded-lg p-0.5 text-xs text-gray-700 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs">
      {inputDetails[index].placeholder}
  </span>
     </label>
  
  );
};

export default InputComponent;

//  name="clientName"
//placeholder="Username"
//checkAllCampos,...
