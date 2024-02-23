import Context from "../context/provider";
import SliceDate from "./SliceDate";


export default function PrintReferencias ({styleRef}){
    const context = Context();

    return(
        <div className="relative top-[-30px] left-8 z-20     ">
        {context?.references?.map((element, id) => (
          <div
            key={id}
            style={{
              top: element.Top + "px",
              left: element.Left - 25 + "px",
            }}
            className={`absolute  ${styleRef(element.name)}`}
          >
            <p className="  flex justify-start ">
              {element.name == "Fecha" ? (
                <SliceDate date={context?.dataToShow[element.name]} />
              ) : (
                context?.dataToShow[element.name]
              )}
            </p>
          </div>
        ))}
      </div>
    )
}