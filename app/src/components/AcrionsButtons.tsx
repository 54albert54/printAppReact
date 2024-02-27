import IconButton from "../UI/IconButton";

export default function ActionsButtons({eraserAllData ,saveAllData  }){
  return(
    <div className="absolute bottom-0 z-20  left-6 h-24 flex flex-row justify-center items-center gap-12  max-w-[760px] w-screen m-auto">
   
    <IconButton title={'Saved'} action={saveAllData} />
    <IconButton title={'Delete'} action={eraserAllData} />
 

  </div>
  )
}