import CustomButton from "./CustomButton";

export default function MenuButtons ({allButtons}){
 
    return(
        <ul className="mt-6  absolute top-1 left-4 flex">
            {
                allButtons.map((buton)=>(
                    <li>
                    <CustomButton title={buton.title} action={buton.action}/>
                
                  </li>
                ))
            }
         
         
        </ul>
    )
}