import { useEffect, useState } from "react";
import useContext from "../context/provider";
import { Area } from '../context/types'

export default function AreaView({ children, area, fullScreen = false }) {
  const context = useContext();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    context.area == area ? setIsVisible(true) : setIsVisible(false);
  }, [context.area]);

  return (
    <main
      className={` ${isVisible ? "z-20" : "z-0 hidden"}      ${
        fullScreen
          ? `   z-10 h-[800px]  w-[1200px] mx-auto flex  ${
              context.area == Area.LOGIN
                ? "!h-screen !w-screen bg-backGround fixed flex-col items-center"
                : "justify-center bg-white"
            }`
          : "relative !bg-backGround  w-[860px] min-h-[520px] h-[80%] z-20 shadow-xl m-auto flex flex-col   px-12 pt-6"
      }`}
    >
      {children}
    </main>
  );
}
