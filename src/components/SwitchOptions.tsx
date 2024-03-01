export default function SwitchOptions ({title,toogle}){
    const handlerCheck = (e) =>{
       
        toogle(e?.target?.checked)
    }
    return(
        <div className="inline-flex items-center justify-center">
  <label className="font-medium peer-disabled:opacity-70 text-xs flex items-center" htmlFor="switch-13">
    <div className="relative">
      <input  onChange={handlerCheck} id="switch-13" className="peer sr-only" type="checkbox" checked={undefined} name="switch"/>
      <div
        className="block cursor-pointer rounded-full border border-slate-200 bg-slate-50 transition peer-checked:border-blue-700 peer-checked:bg-blue-700 peer-disabled:cursor-not-allowed peer-disabled:border-slate-100 peer-disabled:bg-slate-100 h-5 w-10">
      </div>
      <div
        className="absolute top-0.5 cursor-pointer rounded-full border border-slate-200 bg-blue-700 transition peer-checked:translate-x-5 peer-checked:border-blue-700 peer-checked:bg-white peer-disabled:cursor-not-allowed peer-disabled:border-slate-400 peer-disabled:bg-slate-400 left-[2px] size-4">
      </div>
    </div>
    <span className="ml-2 whitespace-nowrap text-xs font-medium leading-none text-black">{title}</span>
  </label>
</div>
    )
}