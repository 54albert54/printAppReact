export default function ActionsButons({eraserAllData ,saveAllData  }){
  return(
    <div className="absolute bottom-0 z-20  left-6 h-24 flex flex-row justify-center items-center gap-12 bg-white max-w-[760px] w-screen m-auto">
    {/* Save */}
    <div
      onClick={saveAllData}
      className="inline-block rotate-180 rounded-full border border-indigo-600 bg-indigo-600 p-3 text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
    >
      <span className="sr-only"> Saved </span>

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
      </svg>
    </div>
 

    {/* Eraser  */}
    <div
      onClick={eraserAllData}
      className="inline-block rotate-180 rounded-full border border-indigo-600 hover:border-red-500 bg-indigo-600 p-3 text-white hover:bg-red-500 hover:text-black focus:outline-none focus:ring active:text-indigo-500"
    >
      <span className="sr-only"> erarse </span>

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
      </svg>
    </div>
  </div>
  )
}