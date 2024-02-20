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
 

  return (

    <div
    className={` absolute z-30 bg-blue-500 hover:bg-red-500 hover:cursor-pointer w-auto  pb-0 text-white px-4`}
   
    style={{
     
      
      backgroundColor: 'blue',
      
      top: position.y + 'px',
      left: position.x + 'px',
      transition: 'background-color 0.3s ease',
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


