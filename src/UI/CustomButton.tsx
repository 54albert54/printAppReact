const CustomButton =({title , action})=>{

  return(
    <button
    onClick={action}
    className={`flex w-[100px] ml-8 bg-gray-200  justify-start rounded-lg hover:bg-gray-200 px-8 py-2 text-sm font-medium text-gray-700`}
      >
    {title}
  </button>
    )
};

export default CustomButton; 