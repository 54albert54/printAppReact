const IconButton =({action , title })=>{
  const isDeleteButton = title == 'Delete'

  return(
    <button 
    onClick={action}
    className={`inline-block rotate-180 rounded-full border  ${isDeleteButton ?" hover:border-red-600 bg-blue-600 hover:bg-red-600  hover:text-black active:text-red-200 text-white  ":"border-blue-600 bg-blue-600 hover:bg-white  hover:text-blue-600 active:text-blue-500 text-white "}   p-3    `}
    > 
      <span className="sr-only"> {title} </span>

      <MyIcon icon={title} />
    </button>
    )
};

export default IconButton; 


const MyIcon = ({icon})=>{

  return(
    <>
      {
        icon == 'Saved' && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className=" rotate-180 icon icon-tabler icon-tabler-device-floppy"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M6 4h10l4 4v10a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2" />
            <path d="M12 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
            <path d="M14 4l0 4l-6 0l0 -4" />
          </svg>)
      }
      {
        icon == 'Delete' && ( 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="rotate-180 icon icon-tabler icon-tabler-trash"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M4 7l16 0" />
          <path d="M10 11l0 6" />
          <path d="M14 11l0 6" />
          <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
          <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
        </svg>)
      }
      {
       icon =='Print' && (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-printer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M17 17h2a2 2 0 0 0 2 -2v-4a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v4a2 2 0 0 0 2 2h2" />
            <path d="M17 9v-4a2 2 0 0 0 -2 -2h-6a2 2 0 0 0 -2 2v4" />
            <path d="M7 13m0 2a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v4a2 2 0 0 1 -2 2h-6a2 2 0 0 1 -2 -2z" />
          </svg>
       )
      }
    
    
    
    
    
    
    
    </>
  )
}