const AlarmaLlenar =({alerts})=>{

  return(
    <div className="   h-12 text-red-500 mb-4 text-[12px] ">
      {
        alerts.map((alert )=>(
          <p
            key={alert.title}
          className={`text-red-500 text-[12px] ${
            alert.show ? "" : "hidden"
          }`}
        >
          {alert.title}
        </p>
        ))
      }
      
      </div>
    )
};

export default AlarmaLlenar; 