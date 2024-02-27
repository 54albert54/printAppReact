import { useState } from "react";
import { referencias } from "../context/storage";

const InfoReferencias = ({element ,ind}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [position, setPosition] = useState({ x: element.Left, y: element.Top });
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  

  const handleMouseDown = (event) => {
    
    

    setIsDragging(true);
    setDragStart({
      x: event.clientX - position.x,
      y: event.clientY - position.y
    });
  };
  
  
  const handleMouseMove = (event) => {
    if (isDragging) {
      setPosition({
        x: event.clientX - dragStart.x,
        y: event.clientY - dragStart.y
      });
    }
  };

  const handleMouseUp = () => {
    referencias[ind].Left = `${position.x}` 
    referencias[ind].Top = `${position.y}`  
    setIsDragging(false);
  };
 //inline-flex items-center justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700

  return (


    <div
    className={` absolute ${isDragging ?"z-30" : "z10"}  border-2 border-blue-800 bg-blue-600 rounded-md active:bg-red-500 hover:border-red-800 hover:bg-red-600 hover:cursor-pointer w-auto  pb-0 font-normal text-sm  text-white px-4`}
   
    style={{
     
      
      
      
      top: position.y + 'px',
      left: position.x + 'px',
      cursor: isDragging ? 'grabbing' : 'grab',
     
    }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}

      id="refDate"
        
    >{element.name}  </div>
  );
};

export default InfoReferencias;


